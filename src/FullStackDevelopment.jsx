
import React from 'react'

function FullStackDevelopment() {

const courseDetails=[{
    
    img:"data:image/jpeg;base64,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",
    title:"Top Ways to Assess Soft Skills in Full Stack Developers in 2023",
    content:"When you’re hiring a full-stack developer, what are the most important things you look for? Most probably excellent technical and development skills. Sure, they might be great at their work, but would they be a great employee or someone who fits well within your organization?",
   date:"15 November 2023 ",
   comment:" No Comments"

},{
    
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd39tQpOa_ZYy6KkWTebn-36B0Jr6fAgoBVw&usqp=CAU",
    title:"The Ultimate Guide to Real-World Full-Stack Development Applications",
    content:"Full-stack development has become increasingly popular in recent years, with companies seeking professionals who can handle both front-end and back-end tasks.",
   date:"29 July 2023 ",
   comment:" No Comments"

},{
    
  img:"https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/QaOeG5O9R8u8FBoOKwww",
  title:"Know This Before Stepping Into Full Stack Development",
  content:"Full Stack Development, one of the growing fields with booming career opportunities, is a ticket to the big companies",
 date:"3 August 2023 ",
 comment:" No Comments"

},{
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0jhWdTMFiYQyKREBBtbxLwhEJ2Ohpd_pXk-rvpmrmjnLWT2UVc5_aSuuexxZofvLbHxo&usqp=CAU",
  title:"How Long Would It Take to Be a Full Stack Developer?",
  content:"Have you ever wondered how much time it would take to become a skilled Full Stack Developer",
 date:"27 July 2023 ",
 comment:" No Comments"
},{
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnUGpup7TwwqG7nHWcUJNYvCuIBZ1qyZCAFw&usqp=CAU",
  title:"5 Career Opportunities for Full Stack Development",

  content:"Ever wondered what awesome job opportunities are waiting for you in the field of Full Stack Development? Well, this blog is just for you!",
 date:"27 July 2023 ",
 comment:" No Comments"
},{
  img:"data:image/png;base64,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",
  title:"Best Books to Learn Full-Stack Development",
  content:"If you’re just starting your journey in full-stack development, it’s essential to build a solid foundation in web development.",
  date:"9 November 2023 ",
  comment:" No Comments"
}
]


  return (
    <div className='container'>
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-4 mb-6">
        {
            courseDetails.map((detail)=>{
                return  <div className="col  mb-6" id="card">
                <div className="card  h-100 border-0 ">
                  <img src={detail.img} className="card-img-top" alt="img"/>
                  <div className="card-body">
                    <h5 className="card-title">{detail.title}</h5>
                    <p className="card-text"> {detail.content}
          </p>
                  </div>
                  <div className="card-footer">
                    <small className="text-body-secondary">{detail.date} &ensp;  {detail.comment}
                   </small>
                  </div>
                </div>
              </div>
              
            })
        }
   
   
  </div>
  </div>
  
  )
}

export default FullStackDevelopment;