import formidable from 'formidable';
import uuidv4 from 'uuid/v4';
import XLSX from 'xlsx';


function internalCategories(data){
    return `
              <internal_category>
                <catid>13570164220533888</catid>
                <title><![CDATA[Chapter: 08 Friction]]></title>
              </internal_category>
              <internal_category>
                <catid>13570164499360700</catid>
                <title><![CDATA[Section:  The Laws of Dry Friction]]></title>
              </internal_category>
              <internal_category>
                <catid>13570164499360722</catid>
                <title><![CDATA[Subtopic:  Coefficients of Friction]]></title>
              </internal_category>
              <internal_category>
                <catid>13570164197853358</catid>
                <title><![CDATA[Topic: Friction]]></title>
              </internal_category>
              <internal_category>
                <catid>13570164265328152</catid>
                <title><![CDATA[Bloom's: Verb 3. Apply]]></title>
              </internal_category>
              <internal_category>
                <catid>13570164265328146</catid>
                <title><![CDATA[Bloom's: Object 2. Conceptual]]></title>
              </internal_category>
              <internal_category>
                <catid>13570164342946602</catid>
                <title><![CDATA[Units: SI ]]></title>
              </internal_category>
              <internal_category>
                <catid>1136040701493</catid>
                <title><![CDATA[Difficulty: Medium]]></title>
              </internal_category>
              <internal_category>
                <catid>13570164343243835</catid>
                <title><![CDATA[ABET Outcomes: (a) an ability to apply knowledge of mathematics, science, and engineering ]]></title>
              </internal_category>
              <internal_category>
                <catid>13570164054528189</catid>
                <title><![CDATA[Accessibility: Keyboard Navigation]]></title>
              </internal_category>
          </categories>`;
}


function uploadXLSX(workbook, inputfiletoread){
         let xlsxJSON = XLSX.utils.sheet_to_json(workbook.Sheets[inputfiletoread], {defVal:""});


         let categoriesXML = '';

         for(let xlsxColumnValeus of xlsxJSON){
             if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1= && xlsxColumnValeus.col2!==undefined){
                categoriesXML = internalCategories()
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1= && xlsxColumnValeus.col2!==undefined){
                categoriesXML += internalCategories();
             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1= && xlsxColumnValeus.col2!==undefined){

             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1= && xlsxColumnValeus.col2!==undefined){

             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1= && xlsxColumnValeus.col2!==undefined){

             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1= && xlsxColumnValeus.col2!==undefined){

             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1= && xlsxColumnValeus.col2!==undefined){

             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1= && xlsxColumnValeus.col2!==undefined){

             }else if(xlsxColumnValeus.col1 && xlsxColumnValeus.col1= && xlsxColumnValeus.col2!==undefined){

             }
             console.log(arrEle)
         }

         categoriesXML = `<categories>${categoriesXML}</<categories>`
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
