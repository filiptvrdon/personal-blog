import {subtitle, title} from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function CvPage() {
  return (
    <DefaultLayout>
      <article className="max-w-4xl mx-auto py-8 md:py-10">
        {/* Header / Contact Information */}
        <header className="mb-8">
          <h1 className={title({size: "lg"})}>Filip Tvrdoň</h1>
          <div className="mt-2 mb-8 text-default-600">
            <p>tvrdon.filip@gmail.com | <a href="https://linkedin.com/in/filip-tvrdon" className="text-primary hover:underline">linkedin.com/in/filip-tvrdon</a></p>
          </div>
          <div className="mt-2 text-default-600">
            <h2 className={title({size: "xsm", })}>Versatile full-stack software engineer building useful systems since 2016</h2>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className={title({size: "sm", })}>Professional Summary</h2>
          <div className="mt-2">
            <p>Experienced SWE with Java/Spring, Typescript/React experience, focusing on building extendable, maintainable, observable, fault tolerant systems, automation and performance optimization. Strong debugging and problem-solving skills. Active communication, adept in agile environments. Mentor experience.</p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className={title({size: "sm", })}>Technical Skills</h2>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Backend:</h3>
              <p>Java (17, 21), Spring Boot, Maven, JUnit, Mockito, OpenAPI</p>
            </div>
            <div>
              <h3 className="font-semibold">Database:</h3>
              <p>PostgreSQL, Oracle, Apache Solr (search engine)</p>
            </div>
            <div>
              <h3 className="font-semibold">Frontend:</h3>
              <p>TypeScript, React, Next.js, AgGrid, MUI</p>
            </div>
            <div>
              <h3 className="font-semibold">Other:</h3>
              <p>Docker, CI/CD, GitHub, GitLab, Azure DevOps, Jira, SonarQube, Black Duck, Agile, Scrum</p>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <h2 className={title({size: "sm", })}>Work Experience</h2>


          {/* Job 1 */}
          <div className="mt-4 mb-6">
            <div className="flex flex-col md:flex-row md:justify-between mb-1">
              <h3 className="font-semibold text-lg">Senior Remote Software Engineer, SQUER</h3>
              <p className="text-default-600">Jul 2025 – Present</p>
            </div>
            <p className="text-default-600 mb-2">Remote</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Built fullstack web applications using Next.js for both server-side rendered frontend and lightweight backend APIs</li>
              <li>Implemented end-to-end type safety across frontend components and backend API routes using TypeScript</li>
              <li>Worked with PostgreSQL databases using Prisma ORM for data modeling and querying</li>
              <li>Implemented authentication and role-based access control using MS Azure Entra ID (Azure AD)</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="mt-4 mb-6">
            <div className="flex flex-col md:flex-row md:justify-between mb-1">
              <h3 className="font-semibold text-lg">Software Developer, Accenture Technology Solutions - Slovakia</h3>
              <p className="text-default-600">Aug 2023 – Jun 2025</p>
            </div>
            <p className="text-default-600 mb-2">Bratislava, Remote</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Designed, implemented, tested, deployed cloud hosted web applications for automotive and retail</li>
              <li>Designed, maintained databases, executed data transformations, backups in PostgreSQL</li>
              <li>Upgraded/removed all critical/high vulnerable dependencies (Maven, GitHub Dependabot, Black Duck)</li>
              <li>Automated SonarQube and BlackDuck scans in Azure Pipelines and manual processes</li>
              <li>Improved system throughput and performance by reducing accidental complexity</li>
              <li>Discovered and fixed bugs and inconsistencies, stabilized critical behavior with unit and integration tests</li>
              <li>Communicated with team and client in English and German</li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="mt-4 mb-6">
            <div className="flex flex-col md:flex-row md:justify-between mb-1">
              <h3 className="font-semibold text-lg">Software Developer, JumpSoft</h3>
              <p className="text-default-600">Oct 2016 – Jul 2023</p>
            </div>
            <p className="text-default-600 mb-2">Bratislava, Hybrid/Remote</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Designed, implemented, tested, deployed cloud hosted web applications for public sector</li>
              <li>Database design, maintenance, data transformation using PostgreSQL, partially Neo4J/Cypher</li>
              <li>Implemented versatile search engine using Apache Solr over a vast knowledge-base</li>
              <li>Leveraged cloud solutions GitLab, AWS, Azure AD, Google Cloud Storage, Amazon S3 storage</li>
              <li>Pioneered clean code, tests, disciplined development</li>
              <li>Restructured internal wiki, authored tutorials, mentored juniors, reduced onboarding process</li>
            </ul>
          </div>
        </section>

        {/* Education & Languages */}
        <section className="mb-8">
          <h2 className={title({size: "sm", })}>Education & Languages</h2>
          <div className="mt-4">
            <h3 className="font-semibold">Masters in Eastern European Studies</h3>
            <p>Comenius University, Bratislava, Focus on communication, writing, and analytical skills.</p>

            <div className="mt-4">
              <h3 className="font-semibold">Languages</h3>
              <ul className="list-disc pl-5 mt-1">
                <li>English: Fluent</li>
                <li>German: Intermediate (B1)</li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </DefaultLayout>
  );
}
