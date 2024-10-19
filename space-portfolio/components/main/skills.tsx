import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
      <section
          id="skills"
          style={{transform: "scale(0.9)"}}
          className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden "
      >
        <SkillText/>

        <div

            className="w-full  flex items-start justify-center absolute">
          <video
              loop
              muted
              autoPlay
              playsInline
              preload="false"
              className="w-full h-auto"
          >
            {/*<source src="/videos/encryption-bg.webm" type="video/webm"/>*/}
            <source src="/videos/skills-bg.webm" type="video/webm"/>

          </video>
          <video
              loop
              muted
              autoPlay
              playsInline
              preload="false"
              className="w-full h-auto"
          >
            <source src="/videos/encryption-bg.webm" type="video/webm"/>
            {/*<source src="/videos/skills-bg.webm" type="video/webm"/>*/}

          </video>
        </div>
      </section>
  );
};
