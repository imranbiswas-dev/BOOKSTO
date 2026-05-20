import React from "react";

const Blog = () => {
  const blog = [
    { id: 1, title: "Books Like Lending a Paw", blog: "If there is one thing that the stars of cozy mysteries can’t resist, it is getting involved in investigations that most people would leave to the police. However, there is a subgenre where animal companions lend a paw in amateur sleuthing. For example, in Lending a Paw by Laurie Cass, a stray tabby decides to join the owner of a bookmobile on its maiden voyage only to lead her to the scene of a crime. Together, the two end up investigating the murder before continuing on many more adventures in the Bookmobile Cat Mystery series. ", img:"https://manybooks.net/sites/default/files/styles/735x540sc/public/2023-05/dog-g4d643a1cd_1280.jpg?itok=RbobpNHB" },
    { id: 2, title: "6 Cozy Mystery Series Worth Reading", blog: "There are plenty of gruesome murder mysteries that cater to fans of gritty thrillers, but what if you are in the mood for a little lighter reading? The solution is cozy mysteries, a lighter take on the crime fiction genre where you are more likely to laugh than shudder in fear. Instead of dwelling on the horrible details, these books focus more on the clever actions of the (usually amateur) detective attempting to solve the murder. So, if you want to indulge in something a little more cozy than the typical hard-boiled detective tales out there.", img:"https://manybooks.net/sites/default/files/styles/735x540sc/public/old-article-files/books-1757734_1280.jpg?itok=uci8Zz8z" },
    { id: 3, title: "Books Like Halloween Party", blog: "Halloween is for everyone, but children in particular enjoy the spooky season the most. The best part of Halloween is the candy, trick or treating, and decorations, but it is also the perfect time to curl up with a suspenseful book or two to get into the spirit of it all. For example, Headless Halloween is part of the Goosebumps Series 2000 books by R.L. Stine and features a creepy costume party with all manner of disgusting games. For more creepy-themed novels aimed at middle schoolers, check out the following books like Halloween Party.", img:"https://manybooks.net/sites/default/files/styles/735x540sc/public/2023-10/halloween-8337571_1280.jpg?itok=6voMW3sN"},
    
  ];
  return (
    <div className="">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0DD6B8] mt-5 mb-3 md:mt-10 lg:mt-20 text-center">From the Blog</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {blog.map(b=> <div className="md:grid grid-cols-12 gap-5 border rounded-lg border-[#0DD6B8] p-2">
            <div className="col-span-5">
                <img className="w-[343px] md:w-[400px] h-[252]" src={b.img} alt="" />
                
            </div>
            <div className="mt-5 md:mt-0 col-span-7">
                <h1 className="text-2xl font-semibold">{b.title}</h1>
                {b.blog}
            </div>
        </div>)}
      </div>
    </div>
  );
};

export default Blog;
