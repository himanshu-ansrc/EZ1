import formidable from 'formidable';
import uuidv4 from 'uuid/v4';
import XLSX from 'xlsx';


function internalCategories(type, data){
    return `<internal_category>
                <catid>13570164220533888</catid>
                <title><![CDATA[${type}: ${data}]]></title>
            </internal_category>`;
}

function rootXML(categories, questionData, commonFeedValue, quesMeta){

   let questionStem = `<worksheet><stem><![CDATA[${questionData}]]</stem></worksheet>`;
   let commonFeed = `<commonFeedback><![CDATA[${commonFeedValue}]]</commonFeedback>`;

   return `<questionSet>
             <question>
               <format>1</format>
               <ezid>13570164500387354</ezid>
               <version>1561981908321</version>
               <title><![CDATA[Problem ${quesMeta['qtitle']}]]></title>
               <type>${quesMeta['qtype']}</type>
               ${categories}
               ${questionStem}
               ${commonFeed}
             </<question>
           <questionSet>`;
}



function imageAndMmlgenerate(type, data){
       let result = '';
       if(type==1 || type==0){
          let k = data.split('.');
          let a = k.pop();
          let b = k.join('');
          if(a=='mml'){
              result = "%" + "media:" + b + "_"+ a+"%";
              return `<p>&nbsp;</p><p>${result}</p><p>&nbsp;</p>`;
          }else
              result = "%" + "media:" + b + "_"+ a + ".ext"+"%";
       }else
           result = data;
       return `<p>${result}</p>`;
}
// { col1: 'Category tags' }
// { col1: 'Bloom\'s: Object' }
// { col1: 'Bloom\'s: Verb' }
// { col1: 'Accessibility' }
// { col1: 'ABET Outcomes' }
// { col1: 'Chapter' }
// { col1: 'Difficulty' }
// { col1: 'Section' }
// { col1: 'Topic' }
// { col1: 'Subtopic' }
// { col1: 'Units' }

// { col1: 'Q type', col2: 'WS' }
// { col1: 'Section Break' }
// { col1: 'Custom Question Type Title', col2: 'Numeric Response' }
// { col1: 'Question Title', col2: 1.001 }


function uploadXLSX(workbook, inputfiletoread){
         let xlsxJSON = XLSX.utils.sheet_to_json(workbook.Sheets[inputfiletoread], {defVal:""});

         let categoriesXML = '';
         let questionValue = '';
         let commonFeedValue = '';

         let questionMeta = {};

         for(let xlsxColumnValeus of xlsxJSON){
             if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='accessibility' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('Accessibility', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='abet outcomes' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('ABET Outcomes', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='chapter' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('Chapter', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='difficulty' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('Difficulty', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='section' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('Section', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='topic' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('Topic', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='subtopic' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('Subtopic', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase()=='units' && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories('Units', xlsxColumnValeus.col2);
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Q type' && xlsxColumnValeus.col2!==undefined){
                questionMeta['qtype'] = xlsxColumnValeus.col2;
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Question Title' && xlsxColumnValeus.col2!==undefined){
                questionMeta['qtitle'] = xlsxColumnValeus.col2;
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Question' && xlsxColumnValeus.col2!==undefined){
                questionValue += imageAndMmlgenerate(xlsxColumnValeus.col1, xlsxColumnValeus.col2);
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Qform' && xlsxColumnValeus.col2!==undefined){
                questionValue += imageAndMmlgenerate(0, xlsxColumnValeus.col2);
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Qimage' && xlsxColumnValeus.col2!==undefined){
                questionValue += imageAndMmlgenerate(1, xlsxColumnValeus.col2);
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Explanation' && xlsxColumnValeus.col2!==undefined){
                commonFeedValue += imageAndMmlgenerate(xlsxColumnValeus.col1, xlsxColumnValeus.col2);
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Eimage' && xlsxColumnValeus.col2!==undefined){
                commonFeedValue += imageAndMmlgenerate(1, xlsxColumnValeus.col2);
             }
             else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1=='Eform' && xlsxColumnValeus.col2!==undefined){
                commonFeedValue += imageAndMmlgenerate(0, xlsxColumnValeus.col2);
             }
            // console.log(arrEle)
         }

         categoriesXML = `<categories>${categoriesXML}</<categories>`;
         console.log(questionValue);
         console.log(rootXML(categoriesXML, questionValue, commonFeedValue, questionMeta));
         return xlsxJSON;
}

export default (router)=>{
      router.post('/upload-xlsx', (req, res)=>{
        new formidable.IncomingForm().parse(req)
            .on('file', function(name, file) {
                const tempPptFileName = uuidv4();
                console.log(tempPptFileName)
                let xml = '';
            let workbook = XLSX.readFile(`${file.path}`);
            let sheet_name_list = workbook.SheetNames;
            for(let x of sheet_name_list){
                      xml += uploadXLSX(workbook, x);
            }
               console.log(xml)
               res.send({key: 'dd'});
            })


            .on('end', function() {
                res.end();
            });
      })
    router.get('/generate-xml', (req, res)=>{
           res.send({
               key: 'generate-xml'
           })
    })
    return router;
}
