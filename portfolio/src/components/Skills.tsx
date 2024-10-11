import React from "react";

import SkillsCard from "@/components/SkillsCard";
import { skillsItems } from "@/data/PortfolioData";

const Skills: React.FC = () => {
    return (
        <div id="skills-section" className="wrapper">
            <div className="flex flex-col gap-y-8 pt-12 font-caladea text-6xl text-earth-grey items-center justify-center">
                { skillsItems.map((item) => (
                    <div className="flex flex-col gap-y-4 items-center justify-center">
                        <h1>{ item.category }</h1>
                        <div className="flex gap-x-20">
                            { item.technologies.map((technology) => (
                                <SkillsCard name={ technology.name } src={ technology.src }></SkillsCard>
                            ))
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;