import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Experience(){

    const [experienceData, setExperienceData] = useState(null);


    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "experience"]{
                    title,
                    place,
                    location,
                    startDate,
                    endDate,
                    description
                }`
            )
            .then((data) => setExperienceData(data))
            .catch(console.error);
    }, []);


    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Work Experience</h1>
                <section className="grid grid-cols-2 gap-8">
                    {experienceData && 
                      experienceData.map((experience, index) => (
                      
                      <article className="relative rounded-lg shadow-xl bg-white p-16">
                    <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                        {experience.title}

                    </h3>
                    <div className="text-gray-500 text-xs space-x-4">
                        <span>
                            <strong className="font-bold">Company</strong>: {" "}
                            {experience.place}
                        </span>
                        <span>
                        <strong className="font-bold">Location</strong>: {" "}
                            {experience.location}
                        </span>
                        <span>
                        <strong className="font-bold">Start Date</strong>: {" "}
                            {experience.startDate}
                        </span>
                        <span>
                        <strong className="font-bold">End Date</strong>: {" "}
                            {experience.endDate}
                        </span>
                        <span>
                        <strong className="font-bold">Job Description</strong>: {" "}
                            {experience.description}
                        </span>
                    </div>
                </article>
                ))}
                 </section>
            </section>
        </main>
    );

}
