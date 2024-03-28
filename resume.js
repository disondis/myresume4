let resume={
    skills:[]
    ,hobbies:[],
    languages:[],
    personel_details:{},
    education:[
        {
            institute_name:"",
            percentage:"",
            year:"",
        },
        {
            institute_name:"",
            percentage:"",
            year:"",
        },
        {
            institute_name:"",
            percentage:"",
            year:"",
        }
    ],
    project:[
        {
            tittle:"",
            role:"",
            year:"",
        },
        {
            tittle:"",
            role:"",
            year:"",
        },
        {
            tittle:"",
            role:"",
            year:"",
        }
    ],
    experiance:[
        {
            company_name:"",
            jobrole:"",
            year:"",
        },
        {
            company_name:"",
            jobrole:"",
            year:"",
        },
        {
            company_name:"",
            jobrole:"",
            year:"",
        }
    ],

}


function box1(ele,key,p_key,index,edu_key){
    if(p_key){
        resume[p_key][key]=ele.value}
    else if(edu_key){
        resume[key][index][edu_key]=ele.value
    }
    else{
        resume[key]=ele.value
    }
    

    preview()
}
function skills(key,id){
    let value=document.getElementById(id).value
    resume[key].push(value)
    document.getElementById(id).value=""
    preview()
}


function preview(){
   document.getElementById("review").innerHTML=JSON.stringify(resume,null,4)
   

}
// application merge

function saveresume(){
    if(!localStorage.getItem("resume_details")){
        let data=[]
        localStorage.setItem("resume_details",JSON.stringify(data))
    }

   let getdata=localStorage.getItem("resume_details")
   let parsedata=JSON.parse(getdata)
   let updatedata=[ ...parsedata,resume]

   localStorage.setItem("resume_details",JSON.stringify(updatedata))
   window.location="list.html"
    
}
function listresume(){
    let updategetdata=localStorage.getItem("resume_details")
    let updateparasdata=JSON.parse(updategetdata)

    let li_empty=''
    for(const input in updateparasdata){
        li_empty=li_empty+`<li><a href="view.html?index=${input}">${updateparasdata[input].name}</a><button onclick="del('${input}')">delete</button>
        <a href="edit.html?index=${input}"><button onclick="edit('${input}')">edit</button></a></li>`;
        
    }
    document.getElementById("list").innerHTML=li_empty
}
        // create edit function

// function edit(){
//     location="edit.html"
// }

function editupdate(){
    let parms=new URLSearchParams(document.location.search)
    let index=parms.get("index")   
    let updategetdata=localStorage.getItem("resume_details")
    let updateparasdata=JSON.parse(updategetdata)
    document.getElementById("inputtext").value=updateparasdata[index].name 
    document.getElementById("emails").value=updateparasdata[index].email
    document.getElementById("project_tittles").value=updateparasdata[index].project_tittle
    document.getElementById("ages").value=updateparasdata[index].age
    document.getElementById("contacts").value=updateparasdata[index].contact
    document.getElementById("declarations").value=updateparasdata[index].declaration
    document.getElementById("addresses").value=updateparasdata[index].address

    document.getElementById("fathername_").value=updateparasdata[index].personel_details.fathername
    document.getElementById("mothername_").value=updateparasdata[index].personel_details.mother_name

                            //  to get skills
     let empty_skills=""
    for(let each_skills of updateparasdata[index].skills){
     empty_skills=empty_skills+`skills:<input type="text" value="${each_skills}" class='skills2' />`
    }
    document.getElementById("skills1").innerHTML=empty_skills
    
                            // to get hobbies
    let empty_hobbies=""
    for(let each_hobbies of updateparasdata[index].hobbies){
    empty_hobbies=empty_hobbies+`hobbies:<input type="text" value="${each_hobbies}" class="hobbies2"/>`
    }
    document.getElementById("hobbies1").innerHTML=empty_hobbies
    
                     // to get languages
  let empty_languages=""
 for(let each_languages of updateparasdata[index].languages){
  empty_languages=empty_languages+`languages:<input type="text" value="${each_languages}" class="languages2" />`
   }
    document.getElementById("languages1").innerHTML=empty_languages 
                //   to get education operation 

   let editoperation= updateparasdata[index].education 
   let  updateeditdata =""   
   for(let eachdata in editoperation){
    updateeditdata=updateeditdata+`<tr>
    <td><input value="${editoperation[eachdata].institute_name}" onkeyup="editz(this,'${eachdata}','institute_name','education')"></td>
    <td><input value="${editoperation[eachdata].percentage}" onkeyup="editz(this,'${eachdata}','percentage','education')"></td>
    <td><input value="${editoperation[eachdata].year}" onkeyup="editz(this,'${eachdata}','year','education')"></td>
   
    </tr>`
   }  
   document.getElementById("educationvalue").innerHTML=updateeditdata  

      //    to get project operation

     let projectoperation= updateparasdata[index].project 
     let  updateprojectdata =""   
     for(let each_projectdata in projectoperation){
    updateprojectdata=updateprojectdata+`<tr>
     <td><input value="${projectoperation[each_projectdata].tittle}" onkeyup="editz(this,'${each_projectdata}','tittle','project')"></td>
     <td><input value="${projectoperation[each_projectdata].role}" onkeyup="editz(this,'${each_projectdata}','role','project')"></td>
    <td><input value="${projectoperation[each_projectdata].year}" onkeyup="editz(this,'${each_projectdata}','year','project')"></td>
             
    </tr>`
    }  
    document.getElementById("projectvalue").innerHTML=updateprojectdata 

            // to get experiance operation
     let experianceoperation=updateparasdata[index].experiance    
     let updateexpdata="" 
     for(let each_exp in experianceoperation){
        updateexpdata=updateexpdata+`<tr>
        <td><input value="${experianceoperation[each_exp].company_name}" onkeyup="editz(this,'${each_exp}','company_name','experiance')"></td>
        <td><input value="${experianceoperation[each_exp].jobrole}" onkeyup="editz(this,'${each_exp}','jobrole','experiance')"></td>
       <td><input value="${experianceoperation[each_exp].year}" onkeyup="editz(this,'${each_exp}','year','experiance')"></td>
               
       </tr>`
     }
     document.getElementById("experiancevalue").innerHTML=updateexpdata   
}  


function addskillsbtn(id){
    let parms=new URLSearchParams(document.location.search)
    let index=parms.get("index")   
    let updategetdata=localStorage.getItem("resume_details")
    let updateparasdata=JSON.parse(updategetdata)

    if(id=='skils1'){    
        let createbtn=document.createElement("input")
    let addSkill=document.getElementById("skills1")
    createbtn.setAttribute("type","text")
    createbtn.setAttribute("placeholder","enter skill")
    createbtn.setAttribute("class","skills2")

    addSkill.appendChild(createbtn)
    

    updateparasdata[index].skills.push(createbtn.value);

    }
    else if(id=='hobbies1'){
        let createbtn=document.createElement("input")
        let addSkill=document.getElementById("hobbies1")
        createbtn.setAttribute("type","text")
        createbtn.setAttribute("placeholder","enter hobbies")
        createbtn.setAttribute("class","hobbies2")
    
        addSkill.appendChild(createbtn)
        
    
        updateparasdata[index].hobbies.push(createbtn.value);
    }
    else if(id=='languages1'){
        let createbtn=document.createElement("input")
        let addSkill=document.getElementById("languages1")
        createbtn.setAttribute("type","text")
        createbtn.setAttribute("placeholder","enter languages")
        createbtn.setAttribute("class","languages2")
    
        addSkill.appendChild(createbtn)
        
    
        updateparasdata[index].languages.push(createbtn.value);

    }
    // document.getElementById("skills1").appendChild(createbtn)

    

                   // addeducation
    else if(id=='educationvalue'){       
        let educationlength=updateparasdata[index].education.length
        let eduvalue=document.getElementById("educationvalue").innerHTML
        updateparasdata[index].education[educationlength]={
            
                institute_name:"",
                percentage:"",
                year:"",
                  
        }


        let addnewedu=`<tr>
        <td><input  onkeyup="editz(this,'${educationlength}','company_name','experiance')"></td>
        <td><input  onkeyup="editz(this,'${educationlength}','jobrole','experiance')"></td>
       <td><input   onkeyup="editz(this,'${educationlength}','year','experiance')"></td>          
       </tr>`
       document.getElementById("educationvalue").innerHTML=eduvalue+addnewedu
    }
                          // add poject
    else if(id=='projectvalue'){       
        let projectlength=updateparasdata[index].project.length
        let provalue=document.getElementById("projectvalue").innerHTML
        updateparasdata[index].project[projectlength]={
            
            tittle:"",
            role:"",
            year:"",
                  
        }


        let addnewpro=`<tr>
        <td><input  onkeyup="editz(this,'${projectlength}','tittle','project')"></td>
        <td><input  onkeyup="editz(this,'${projectlength}','role','project')"></td>
       <td><input   onkeyup="editz(this,'${projectlength}','year','project')"></td>          
       </tr>`
       document.getElementById("projectvalue").innerHTML=provalue+addnewpro

                 

       localStorage.setItem("resume_details",JSON.stringify(updateparasdata))
    }
            //****************************/   experiance**************************************************************
    else if(id=='experiancevalue'){       
        let experiancelength=updateparasdata[index].experiance.length
        let expvalue=document.getElementById("experiancevalue").innerHTML
        updateparasdata[index].experiance[experiancelength]={

            company_name:"",
            jobrole:"",
            year:"",
                  
        }


        let addnewexp=`<tr>
        <td><input  onkeyup="editz(this,'${experiancelength}','company_name','experiance')"></td>
        <td><input  onkeyup="editz(this,'${experiancelength}','job','experiance')"></td>
       <td><input   onkeyup="editz(this,'${experiancelength}','year','experiance')"></td>          
       </tr>`
       document.getElementById("experiancevalue").innerHTML=expvalue+addnewexp

                 

       localStorage.setItem("resume_details",JSON.stringify(updateparasdata))
    }
}


function update(){
    let parms=new URLSearchParams(document.location.search)
    let index=parms.get("index")   
    let updategetdata=localStorage.getItem("resume_details")
    let updateparasdata=JSON.parse(updategetdata)
    // let inputtexts=document.getElementById("inputtext").value
    updateparasdata[index].project_tittle=document.getElementById("project_tittles").value
    updateparasdata[index].name=document.getElementById("inputtext").value
    updateparasdata[index].email=document.getElementById("emails").value
    updateparasdata[index].age=document.getElementById("ages").value
    updateparasdata[index].contact=document.getElementById("contacts").value
    updateparasdata[index].declaration=document.getElementById("declarations").value
    updateparasdata[index].address=document.getElementById("addresses").value


    updateparasdata[index].personel_details.fathername=document.getElementById("fathername_").value
    updateparasdata[index].personel_details.mother_name=document.getElementById("mothername_").value

               //    update skills
      let skillsvalue=document.getElementsByClassName("skills2")  
      let fianlskill=[]
      for(let eachskills of skillsvalue){
        fianlskill.push(eachskills.value)
      } 
       updateparasdata[index].skills=fianlskill    

               //    update hobbies

       let hobbiesvalue=document.getElementsByClassName("hobbies2")  
       let fianlhobbies=[]
       for(let eachhobbies of hobbiesvalue){
        fianlhobbies.push(eachhobbies.value)
       } 
        updateparasdata[index].hobbies=fianlhobbies

        // update languages
        let lanvalue=document.getElementsByClassName("languages2")  
        let fianllan=[]
        for(let eachlan of lanvalue){
         fianllan.push(eachlan.value)
        } 
         updateparasdata[index].languages=fianllan

    // let keys=[];

    // for(let each in updateparasdata){
    //     if(each==index){
    //         updateparasdata[each].value=inputtexts
    //     }
    //     keys.push(updateparasdata[each])
    // }  
    
    // updateparasdata[index].name=inputtexts

    

      localStorage.setItem("resume_details",JSON.stringify(updateparasdata))
      window.location="list.html"

}

function editz(element,indux_no,child_key,parent_key){
    let parms=new URLSearchParams(document.location.search)
    let index=parms.get("index")
    let updategetdatas1=localStorage.getItem("resume_details")
    let updateparasdatas1=JSON.parse(updategetdatas1)
    updateparasdatas1[index][parent_key][indux_no][child_key]=element.value;


    localStorage.setItem("resume_details",JSON.stringify(updateparasdatas1))
    

}
    //  create view function
function view(){
    let parms=new URLSearchParams(document.location.search)
    let index=parms.get("index")

    let updategetdata=localStorage.getItem("resume_details")
    let updateparasdata=JSON.parse(updategetdata)

    document.getElementById("tittle1").innerHTML=`tittle:${updateparasdata[index].project_tittle}`
    document.getElementById("name1").innerHTML=`name:${updateparasdata[index].name}`
    document.getElementById("email1").innerHTML=`email:${updateparasdata[index].email}`
    document.getElementById("age1").innerHTML=`age:${updateparasdata[index].age}`
    document.getElementById("contact1").innerHTML=`contact:${updateparasdata[index].contact}`
    document.getElementById("declaration1").innerHTML=`declaration:${updateparasdata[index].declaration}`
    document.getElementById("address1").innerHTML=`address:${updateparasdata[index].address}`


    document.getElementById("fathername1").innerHTML=`fathername:${updateparasdata[index].personel_details.fathername}`
    document.getElementById("mothername1").innerHTML=`mothername:${updateparasdata[index].personel_details.mother_name}`


    

    // create skills loop
    let loopskill=""
    for(let each of updateparasdata[index].skills){
        loopskill=loopskill+` <tr>
        <td>${each}</td> 
      </tr>`
    }
    document.getElementById("tableskills").innerHTML=loopskill

    // ctreatetable table loop for hobbies
    let loophobbies=""
    for(let each of updateparasdata[index].hobbies){
        loophobbies=loophobbies+` <tr>
        <td>${each}</td> 
      </tr>`
    }
    document.getElementById("tablehobbies").innerHTML=loophobbies

    // to createloop for languages
    let looplanguages=""
    for(let each of updateparasdata[index].languages){
        looplanguages=looplanguages+` <tr>
        <td>${each}</td> 
      </tr>`
    }
    document.getElementById("tablelanguages").innerHTML=looplanguages




   



    // create table loop for project
    let project_tabl=""
    for(let each of updateparasdata[index].project){
        project_tabl=project_tabl+` <tr>
        <td>${each.tittle}</td>
        <td>${each.role}</td>
        <td>${each.year}</td>  
      </tr>`
    }
    document.getElementById("projectbody").innerHTML=project_tabl

    // create table loop for education
    let edu_tabl=""
   for(let each of updateparasdata[index].education){
        edu_tabl=edu_tabl+` <tr>
        <td>${each.institute_name}</td>
        <td>${each.percentage}</td>
        <td>${each.year}</td>  
      </tr>`
    }
    document.getElementById("educationbody").innerHTML=edu_tabl 

    // create table loop for experiance
    
    let experiance_table=""
   for(let each of updateparasdata[index].experiance){
        experiance_table=experiance_table+` <tr>
        <td>${each.company_name}</td>
        <td>${each.jobrole}</td>
        <td>${each.year}</td>  
      </tr>`
    }
    document.getElementById("experiancebody").innerHTML=experiance_table 



}
       // deletefunction
function del(name_del){
    let updateresume=[]
    let getdata=localStorage.getItem("resume_details")
    let parsedata=JSON.parse(getdata)
    for(let each in parsedata){
        if(each!=name_del){
            updateresume.push(parsedata[each])

        }
    }
    localStorage.setItem("resume_details",JSON.stringify(updateresume))
    location="list.html"
}
 