// Helper function to reset all active classes
function resetActiveClasses() {
    const links = [
        'link-overview', 'link-medical', 'link-selfdriven',
        'link-robotics', 'link-programming', 'link-agriculture',
        'link-education', 'link-team', 'link-conclusion'
    ];
    links.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });
}

// --- NEW HELPER FUNCTION: Reset Scroll to Top ---
function resetScroll() {
    const contentArea = document.getElementById('content-area');
    if (contentArea) {
        contentArea.scrollTop = 0;
    }
}

// --- FUNCTION 1: OVERVIEW (General Summary) ---
function showOverviewContent() {
    resetActiveClasses();
    resetScroll(); // Reset scroll here
    document.getElementById('link-overview').classList.add('active');

    // Default Background
    document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-124672.jpg')";

    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
    
    
    <div class="content-box">
                    <header>
                        <h1>AI in Different Fields</h1>
                     </header>
                    <div class="overview-video">
                        <video width="100%" autoplay muted loop>
                         <source src="https://cdn.pixabay.com/video/2023/02/14/150608-798877003_large.mp4" type="video/mp4">
                             Your browser does not support the video tag.
                        </video>
                    </div>
                    <h1 style="border-bottom: 2px solid #2a7aa5; padding-bottom: 10px; margin-bottom: 20px;">From Concept to Core Driver</h1>
                    
                    <p style="margin-top: 10px; font-size: 1.1em;">
                        Artificial Intelligence (AI) is no longer a theoretical concept from the 1960s; it is now a fundamental pillar transforming every major industry. Moving beyond simple automation, modern AI utilizes "Deep Learning" and Big Data to act as a strategic partner that enhances human efficiency and opens new horizons for innovation.
                    </p>

                    <h3 style="color: #4da6ff; margin-top: 30px; margin-bottom: 15px;">Sector Highlights</h3>
                    
                    <div class="overview-grid">
                        <div class="overview-card">
                            <h4><i class="fa-solid fa-stethoscope"></i> Medicine</h4>
                            <p>AI algorithms now detect diseases with <strong>94-99% accuracy</strong> and have reduced drug discovery timelines by <strong>80-90%</strong>.</p>
                        </div>
                        <div class="overview-card">
                            <h4><i class="fa-solid fa-robot"></i> Industrial Robotics</h4>
                            <p>Collaborative robots (Cobots) work alongside humans, increasing production speed by <strong>40%</strong> and significantly reducing defects.</p>
                        </div>
                        <div class="overview-card">
                            <h4><i class="fas fa-pen"></i> Education</h4>
                            <p>AI acts as a "Collaborative Assistant," handling administrative tasks and personalizing learning paths to fit each student's pace.</p>
                        </div>
                        <div class="overview-card">
                            <h4><i class="fa-solid fa-car"></i> Transportation</h4>
                            <p>ADAS systems (like auto-braking) are reducing rear-end crashes by <strong>~50%</strong>, paving the way for a future of autonomous vehicles.</p>
                        </div>
                        <div class="overview-card">
                            <h4><i class="fa-solid fa-seedling"></i> Agriculture</h4>
                            <p>Precision farming increases yields by <strong>5-15%</strong> and saves <strong>40-50%</strong> of water, ensuring food security and sustainability.</p>
                        </div>
                        <div class="overview-card">
                            <h4><i class="fa-solid fa-code"></i> Programming</h4>
                            <p>From a helper to a partner, AI now suggests code, debugs errors, and boosts developer productivity, ensuring higher software quality.</p>
                        </div>
                    </div>
                </div>
            `;
}

// --- FUNCTION 2: EDUCATION ---
function showEducationContent() {
    resetActiveClasses();
    resetScroll(); // Reset scroll here
    document.getElementById('link-education').classList.add('active');
    document.body.style.backgroundImage = "url('https://www.innovationnewsnetwork.com/wp-content/uploads/2024/02/shutterstockPhonlamai-Photo_1058815598-1024x576.jpg')";

    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `   
                <div class="content-box">
                    <h1 style="border-bottom: 2px solid #2a7aa5; padding-bottom: 10px; margin-bottom: 20px;">Artificial Intelligence in Education (AIEd)</h1>
                    
                    <h3 style="color: #4da6ff; margin-top: 25px;">1. Historical Context: When did it start?</h3>
                    <p style="margin-top: 10px;">While concepts like "teaching machines" date back to the 1960s (PLATO system), modern AI integration began in the late 1990s.</p>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Early Phase (1970s–1990s):</strong> Rule-based "Intelligent Tutoring Systems" (ITS) with simple if-then logic.</li>
                        <li style="margin-bottom: 5px;"><strong>Modern Phase (2010s–Present):</strong> Big Data and Deep Learning allowed for truly adaptive systems.</li>
                        <li style="margin-bottom: 5px;"><strong>2022 Turning Point:</strong> The launch of generative AI (like ChatGPT) marked mass adoption.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">2. Current Status: Essential or Assistant?</h3>
                    <p style="margin-top: 10px;">AI is currently classified as a <strong>Collaborative Assistant</strong>, not a replacement. It follows a "Human-in-the-Loop" model, handling repetitive tasks so teachers can focus on mentorship. It is becoming "essential" infrastructure for managing data.</p>

                    <h3 style="color: #4da6ff; margin-top: 25px;">3. Key Applications & Tools</h3>
                    <table>
                        <tr>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Examples</th>
                        </tr>
                        <tr>
                            <td>Intelligent Tutoring Systems (ITS)</td>
                            <td>Adapts difficulty based on performance.</td>
                            <td>Duolingo, Khanmigo</td>
                        </tr>
                        <tr>
                            <td>Administrative Automation</td>
                            <td>Routine tasks like grading & scheduling.</td>
                            <td>Turnitin</td>
                        </tr>
                        <tr>
                            <td>LMS</td>
                            <td>Predicts student dropout rates.</td>
                            <td>Canvas, Blackboard</td>
                        </tr>
                    </table>

                    <h3 style="color: #4da6ff; margin-top: 25px;">4. Improvements & Benefits</h3>
                    <ul style="list-style-type: square; margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Hyper-Personalization:</strong> Tailors content to individual pace.</li>
                        <li style="margin-bottom: 5px;"><strong>24/7 Availability:</strong> Chatbots provide instant answers anytime.</li>
                        <li style="margin-bottom: 5px;"><strong>Accessibility:</strong> Speech-to-text tools assist students with disabilities.</li>
                        <li style="margin-bottom: 5px;"><strong>Data-Driven Insights:</strong> Highlights topics students struggle with collectively.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">5. Statistics (2024–2025 Context)</h3>
                    <table>
                        <tr>
                            <th>Metric</th>
                            <th>Data Point</th>
                            <th>Implication</th>
                        </tr>
                        <tr>
                            <td>Projected Market (2030)</td>
                            <td>$53–112 Billion</td>
                            <td>Explosive growth (CAGR > 35-40%).</td>
                        </tr>
                        <tr>
                            <td>Educator Adoption</td>
                            <td>60%</td>
                            <td>Rapidly becoming a standard tool.</td>
                        </tr>
                        <tr>
                            <td>Student Usage</td>
                            <td>Nearly 78%</td>
                            <td>Wide acceptance for study routines.</td>
                        </tr>
                        <tr>
                            <td>Efficiency Gains</td>
                            <td>30–50% less admin time</td>
                            <td>Significant ROI for institutions.</td>
                        </tr>
                    </table>

                    <h3 style="color: #4da6ff; margin-top: 25px;">6. Challenges & Risks</h3>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Job Displacement:</strong> High risk for administrative roles.</li>
                        <li style="margin-bottom: 5px;"><strong>"Hallucination":</strong> AI giving incorrect facts confidently.</li>
                        <li style="margin-bottom: 5px;"><strong>Critical Thinking Erosion:</strong> Over-reliance on AI for answers.</li>
                        <li style="margin-bottom: 5px;"><strong>Data Privacy:</strong> Ethics of collecting massive student data.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">7. Future Expectations</h3>
                    <ul style="list-style-type: square; margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Replacement?</strong> Unlikely. Teachers will evolve into "Learning Facilitators."</li>
                        <li style="margin-bottom: 5px;"><strong>Smarter Environments:</strong> Classrooms with IoT/Computer Vision to track engagement.</li>
                        <li style="margin-bottom: 5px;"><strong>Continuous Assessment:</strong> Moving from exams to "Stealth Assessment."</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">Sources</h3>
                    <p style="font-size: 0.85em; margin-top: 5px; opacity: 0.8;">Stanford HAI, UNESCO, MarketsandMarkets, Forbes Advisor, MDPI.</p>
                </div>
            `;
}

// --- FUNCTION 3: SELF-DRIVEN CARS ---
function showSelfDrivenContent() {
    resetActiveClasses();
    resetScroll(); // Reset scroll here
    document.getElementById('link-selfdriven').classList.add('active');
    document.body.style.backgroundImage = "url('https://f5b623aa.delivery.rocketcdn.me/wp-content/uploads/elementor/thumbs/Blog_The-Power-of-AI-in-the-Automotive-Industry-qmegowv8l46bagedh35rab5rilvwqls9gtks9v8etc.jpg')";

    var amir = "Amir Atef Ghaly";
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
                <div class="content-box">
                    <h1 style="border-bottom: 2px solid #2a7aa5; padding-bottom: 10px; margin-bottom: 20px;"> AI in Cars & Transportation</h1>
                    
                    <h3 style="color: #4da6ff; margin-top: 25px;">1. Historical Context: When did it start?</h3>
                    <p style="margin-top: 10px;">Early experiments date to the <strong>1980s</strong> (Carnegie Mellon’s Navlab, Mercedes projects). The modern acceleration point was the <strong>DARPA Grand Challenge (2004–2007)</strong>, which is widely credited with turning research prototypes into commercially pursued self-driving programs.</p>

                    <h3 style="color: #4da6ff; margin-top: 25px;">2. Current Status: Essential or Assistive?</h3>
                    <p style="margin-top: 10px;">It is <strong>mostly assistive</strong> today. The dominant AI deployments in mass-market vehicles are Advanced Driver Assistance Systems (ADAS) like lane-keeping and automatic emergency braking (AEB). Full end-to-end autonomy (SAE Level 4–5) exists only in limited pilots (e.g., robotaxis).</p>

                    <h3 style="color: #4da6ff; margin-top: 25px;">3. Main Applications</h3>
                    <table>
                        <tr>
                            <th>Application</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>ADAS / Safety</td>
                            <td>AEB, forward-collision warning, lane-keep (standard on ~90% of new light vehicles).</td>
                        </tr>
                        <tr>
                            <td>Robotaxis</td>
                            <td>Autonomous ride-hailing (e.g., Waymo) operating tens of millions of driverless miles.</td>
                        </tr>
                        <tr>
                            <td>Fleet Optimization</td>
                            <td>AI models used by logistics to reduce empty miles and improve utilization.</td>
                        </tr>
                        <tr>
                            <td>Manufacturing</td>
                            <td>Predictive maintenance and collaborative robots on assembly lines.</td>
                        </tr>
                    </table>

                    <h3 style="color: #4da6ff; margin-top: 25px;">4. Benefits & Improvements</h3>
                    <ul style="list-style-type: square; margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Crash Reduction:</strong> AEB can reduce front-to-rear crashes by roughly ~50%.</li>
                        <li style="margin-bottom: 5px;"><strong>Safety Potential:</strong> Addresses the ~94% of crashes attributed to "driver-related" critical reasons.</li>
                        <li style="margin-bottom: 5px;"><strong>Operational Gains:</strong> AI + collaborative robots can raise factory productivity by up to ~20%.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">5. Key Statistics</h3>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Market Size:</strong> Estimated ~$68.1 billion (2024), growing to ~$214.3 billion by 2030 (CAGR ≈ 19.9%).</li>
                        <li style="margin-bottom: 5px;"><strong>ADAS Adoption:</strong> Rising from ~360 million units (2025) to ~652 million (2032).</li>
                        <li style="margin-bottom: 5px;"><strong>Robotaxi Scale:</strong> Waymo reports tens of millions of rider-only driverless miles.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">6. Challenges & Risks</h3>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Edge-Case Failures:</strong> AVs still face crashes and failures in complex scenarios.</li>
                        <li style="margin-bottom: 5px;"><strong>Job Impacts:</strong> Transport jobs are "in transition"; automation shifts tasks rather than erasing all roles.</li>
                        <li style="margin-bottom: 5px;"><strong>Regulatory Barriers:</strong> Safety mandates and public scrutiny slow full deployment.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">7. Future Outlook: Will AI replace humans?</h3>
                    <p style="margin-top: 10px;"><strong>Short–medium term (5–10 years):</strong> Widespread assistive AI (ADAS) will grow; full autonomy will scale slowly.</p>
                    <p style="margin-top: 5px;"><strong>Long term:</strong> Complete replacement of human drivers is unlikely soon. Automation will replace some jobs (repetitive routes), augment others, and create new roles (AV supervision).</p>

                    <h3 style="color: #4da6ff; margin-top: 25px;">Sources</h3>
                    <p style="font-size: 0.85em; margin-top: 5px; opacity: 0.8;">NHTSA, IIHS, Waymo, Tesla, McKinsey, Grand View Research, MarketsandMarkets, OECD.${amir}</p>
                </div>
            `;
}

// --- FUNCTION 4: MEDICAL ---
function showMedicalContent() {
    resetActiveClasses();
    resetScroll(); // Reset scroll here
    document.getElementById('link-medical').classList.add('active');
    document.body.style.backgroundImage = "url('https://www.frost.com/wp-content/uploads/2024/10/blog-1.jpg')";

    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
                <div class="content-box">
                    <h1 style="border-bottom: 2px solid #2a7aa5; padding-bottom: 10px; margin-bottom: 20px;">AI in Medicine & Healthcare</h1>
                    
                    <h3 style="color: #4da6ff; margin-top: 25px;">1. Historical Timeline: When did it start?</h3>
                    <p style="margin-top: 10px;">While the concept of AI dates back to the 1950s, its application in medicine has two distinct phases:</p>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>The Early Phase (1970s):</strong> The first notable medical AI was <em>MYCIN</em> (Stanford), an "expert system" for diagnosing blood infections.</li>
                        <li style="margin-bottom: 5px;"><strong>The Modern Boom (2012–Present):</strong> The revolution began with Deep Learning and Big Data, allowing practical tasks like reading X-rays using massive medical datasets.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">2. Current Status: Essential or Assistive?</h3>
                    <p style="margin-top: 10px;">Currently, AI is primarily <strong>Assistive</strong> ("Augmented Intelligence"). It acts as a "second opinion" or triage tool. Regulatory bodies like the FDA require a "human in the loop," meaning the physician bears the final responsibility.</p>

                    <h3 style="color: #4da6ff; margin-top: 25px;">3. Key Applications & Tools</h3>
                    <table>
                        <tr>
                            <th>Area</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>Diagnostics</td>
                            <td>AI algorithms (CNNs) analyze CT scans/MRIs to detect tumors/fractures often faster than humans.</td>
                        </tr>
                        <tr>
                            <td>Drug Discovery</td>
                            <td>Predicts molecule behavior to find medicines faster (e.g., Insilico Medicine).</td>
                        </tr>
                        <tr>
                            <td>Robot Surgery</td>
                            <td>Systems like <em>Da Vinci</em> stabilize surgeon's hands and provide 3D visualization.</td>
                        </tr>
                        <tr>
                            <td>Virtual Assistants</td>
                            <td>Chatbots (e.g., Babylon Health) check symptoms and triage patients.</td>
                        </tr>
                    </table>

                    <h3 style="color: #4da6ff; margin-top: 25px;">4. Improvements & Benefits</h3>
                    <ul style="list-style-type: square; margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Early Detection:</strong> Detects subtle patterns (e.g., early Alzheimer’s) humans might miss.</li>
                        <li style="margin-bottom: 5px;"><strong>Operational Efficiency:</strong> Automates scheduling and notes, saving doctors 1-2 hours/day.</li>
                        <li style="margin-bottom: 5px;"><strong>Reduced Errors:</strong> Reduces false negatives and positives, improving patient safety.</li>
                        <li style="margin-bottom: 5px;"><strong>24/7 Availability:</strong> ICU monitoring systems that never sleep.</li>
                    </ul>

                      <h3 style="color: #4da6ff; margin-top: 25px;">5. Statistics & Numbers</h3>
                    <ul style="list-style-type: square; margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Diagnostic Accuracy:</strong> 94–99% in specific tasks (e.g., mammograms), often matching/exceeding human radiologists.</li>
                        <li style="margin-bottom: 5px;"><strong>Drug Discovery Speed:</strong> Reduced from 10–15 years to < 18 months for identification (80-90% reduction).</li>
                        <li style="margin-bottom: 5px;"><strong>Market Growth:</strong> Projected CAGR of over 37% (2024–2030).</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">6. Challenges & Risks</h3>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Job Displacement:</strong> High risk for administrative roles, low for clinical roles.</li>
                        <li style="margin-bottom: 5px;"><strong>Algorithmic Bias:</strong> Models trained on specific demographics may fail others.</li>
                        <li style="margin-bottom: 5px;"><strong>"Black Box" Problem:</strong> Difficulty explaining <em>why</em> an AI reached a diagnosis.</li>
                        <li style="margin-bottom: 5px;"><strong>Data Privacy:</strong> Concerns about HIPAA/GDPR compliance.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">7. Future Outlook: Will it replace humans?</h3>
                    <p style="margin-top: 10px;">The consensus is <strong>not replacement, but transformation</strong>. "AI will not replace radiologists, but radiologists who use AI will replace those who do not." The role shifts from memorizing facts to managing data and showing empathy.</p>

                    <h3 style="color: #4da6ff; margin-top: 25px;">8. Will the "Place" Become Smarter?</h3>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Ambient Clinical Intelligence:</strong> Hospitals become "smart environments."</li>
                        <li style="margin-bottom: 5px;"><strong>Sensors & IoT:</strong> Computer vision detects falls or monitors hygiene without wires.</li>
                        <li style="margin-bottom: 5px;"><strong>Smart ERs:</strong> AI prioritizes (triages) patients based on severity automatically.</li>
                    </ul>
                    
                    <h3 style="color: #4da6ff; margin-top: 25px;">Sources</h3>
                    <p style="font-size: 0.85em; margin-top: 5px; opacity: 0.8;">Nature Medicine, The Lancet Digital Health, Mayo Clinic, IBM Watson Health, FDA, Google Health/DeepMind.</p>
                </div>
            `;
}

// --- FUNCTION 5: ROBOTICS ---
function showRoboticsContent() {
    resetActiveClasses();
    resetScroll(); // Reset scroll here
    document.getElementById('link-robotics').classList.add('active');
    document.body.style.backgroundImage = "url('https://t4.ftcdn.net/jpg/08/19/36/09/360_F_819360930_nGVIMBaS86v5hJpMUiccEWCY6ESTAJeM.jpg')";

    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
                <div class="content-box">
                    <h1 style="border-bottom: 2px solid #2a7aa5; padding-bottom: 10px; margin-bottom: 20px;">AI in Industrial Robotics</h1>
                    
                    <h3 style="color: #4da6ff; margin-top: 25px;">1. Beginning of AI in Industry</h3>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>1961:</strong> First industrial robot (Unimate).</li>
                        <li style="margin-bottom: 5px;"><strong>1960s–70s:</strong> Robots performed simple, repetitive tasks—no AI.</li>
                        <li style="margin-bottom: 5px;"><strong>1980s:</strong> AI introduced (machine learning & computer vision).</li>
                        <li style="margin-bottom: 5px;"><strong>2000s:</strong> Robots learn, adapt, and work safely with humans.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">2. AI Role in Robotics</h3>
                    <p style="margin-top: 10px;">AI was added later to robotics. Traditional robots follow pre-programmed instructions, whereas AI is needed for flexibility, object recognition, and decision-making.</p>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Basic Factories:</strong> AI is supportive (e.g., quality checks).</li>
                        <li style="margin-bottom: 5px;"><strong>Modern Factories (Industry 4.0):</strong> AI is essential for automation and efficiency.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">3. Main Applications</h3>
                    <table>
                        <tr>
                            <th>Application</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>Smart Manufacturing</td>
                            <td>Optimizes production in real-time.</td>
                        </tr>
                        <tr>
                            <td>Quality Control</td>
                            <td>AI detects defects accurately.</td>
                        </tr>
                         <tr>
                            <td>Autonomous Logistics</td>
                            <td>Robots handle materials automatically.</td>
                        </tr>
                         <tr>
                            <td>Collaborative Robots (Cobots)</td>
                            <td>Work safely alongside humans.</td>
                        </tr>
                        <tr>
                            <td>Robotic Process Automation (RPA)</td>
                            <td>Automates repetitive tasks.</td>
                        </tr>
                    </table>

                    <h3 style="color: #4da6ff; margin-top: 25px;">4. Improvements</h3>
                    <ul style="list-style-type: square; margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Efficiency:</strong> Increases production speed and reduces errors.</li>
                        <li style="margin-bottom: 5px;"><strong>Safety:</strong> Robots reduce human exposure to hazards.</li>
                        <li style="margin-bottom: 5px;"><strong>Predictive Maintenance:</strong> Detects problems before they occur.</li>
                        <li style="margin-bottom: 5px;"><strong>Quality & Accuracy:</strong> AI vision improves defect detection.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">5. AI Statistics</h3>
                    <ul style="list-style-type: square; margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;">63% of manufacturers report increased productivity with AI.</li>
                        <li style="margin-bottom: 5px;">Predictive maintenance reduces downtime by 20–30%.</li>
                        <li style="margin-bottom: 5px;">AI-based quality control reduces defects by up to 40%.</li>
                        <li style="margin-bottom: 5px;">AI implementation can cut operational costs by 20–25%.</li>
                        <li style="margin-bottom: 5px;">Robots with AI perform tasks up to 40% faster than traditional robots.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">6. Challenges</h3>
                      <ul style="margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>High Costs:</strong> AI systems are expensive.</li>
                        <li style="margin-bottom: 5px;"><strong>Job Impact:</strong> Some tasks may be automated.</li>
                        <li style="margin-bottom: 5px;"><strong>Data & Skills:</strong> Requires accurate data and skilled personnel.</li>
                        <li style="margin-bottom: 5px;"><strong>Safety & Security:</strong> Must ensure safe operation and cyber protection.</li>
                    </ul>
                </div>
            `;
}

// --- FUNCTION 6: PROGRAMMING ---
function showProgrammingContent() {
    resetActiveClasses();
    resetScroll(); // Reset scroll here
    document.getElementById('link-programming').classList.add('active');
    document.body.style.backgroundImage = "url('https://updategadh.com/wp-content/uploads/2024/12/image-30.png')";

    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
                <div class="content-box">
                    <h1 style="border-bottom: 2px solid #2a7aa5; padding-bottom: 10px; margin-bottom: 20px;">AI in Programming</h1>

                    <h3 style="color: #4da6ff; margin-top: 25px;">1. Historical Context</h3>
                    <p style="margin-top: 10px;">Artificial Intelligence began to enter the field of programming in the early 1960s (e.g., <em>ELIZA</em>). In the modern era (2010–present), AI assists developers by suggesting code, completing functions, and debugging, but still relies on human oversight.</p>

                    <h3 style="color: #4da6ff; margin-top: 25px;">2. Top 3 AI Applications</h3>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 15px;">
                            <strong>Code Completion:</strong> AI tools like <em>GitHub Copilot</em> and <em>Tabnine</em> suggest complete lines or blocks of code.
                        </li>
                        <li style="margin-bottom: 15px;">
                            <strong>Error Detection:</strong> Tools like <em>DeepCode</em> identify logical or syntactic errors and suggest fixes.
                        </li>
                        <li>
                            <strong>Code Generation:</strong> Tools like <em>ChatGPT</em> can generate functional code from natural language descriptions.
                        </li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">3. Top 3 Benefits</h3>
                    <ul style="list-style-type: square; margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 10px;"><strong>Increased Productivity:</strong> Reduces repetitive tasks, accelerating workflows.</li>
                        <li style="margin-bottom: 10px;"><strong>Enhanced Accuracy:</strong> Detects bugs and vulnerabilities early.</li>
                        <li><strong>Learning Support:</strong> Helps beginners learn new languages quickly.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">4. Programming Accuracy Trend (1960–2025)</h3>
                    <p style="margin-top: 10px;">From <strong>15–50 errors per 1,000 lines</strong> in the 1960s to <strong>1–3 defects</strong> today, AI and modern practices have massively improved software reliability.</p>

                    <h3 style="color: #4da6ff; margin-top: 25px;">5. Top Challenges</h3>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 15px;"><strong>Early Era:</strong> Limited computing resources.</li>
                        <li style="margin-bottom: 15px;"><strong>Expansion Era:</strong> Integration difficulties and lack of data.</li>
                        <li><strong>Modern Era:</strong> Overreliance on AI can lead to buggy or insecure code if not reviewed.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">6. Future Outlook</h3>
                    <p style="margin-top: 10px;">AI will act as a powerful assistant, allowing programmers to focus on innovation and architecture. It is a <strong>collaboration</strong>, not a replacement.</p>
                
                    <h3 style="color: #4da6ff; margin-top: 25px;">Sources</h3>
                    <p style="font-size: 0.85em; margin-top: 5px; opacity: 0.8;">Britannica, GitHub Docs, Graphite, W3LC, Medium.</p>
                </div>
            `;
}

// --- FUNCTION 7: AGRICULTURE ---
function showAgricultureContent() {
    resetActiveClasses();
    resetScroll(); // Reset scroll here
    document.getElementById('link-agriculture').classList.add('active');
    document.body.style.backgroundImage = "url('https://cdn.al-ain.com/lg/images/2023/8/10/62-224232-agriculture-sustainability-artificial-intelligence-3.jpeg')";

    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
                <div class="content-box">
                    <h1 style="border-bottom: 2px solid #2a7aa5; padding-bottom: 10px; margin-bottom: 20px;">AI in Smart Agriculture</h1>
                    
                    <h3 style="color: #4da6ff; margin-top: 25px;">1. Market Growth</h3>
                    <p style="margin-top: 10px;">AI in agriculture reached <strong>$5.9B in 2025</strong> and is expected to grow to <strong>$61.3B by 2035</strong>, with an annual growth rate of <strong>20–26%</strong>.</p>

                    <h3 style="color: #4da6ff; margin-top: 25px;">2. Key Benefits of AI</h3>
                    <table>
                        <tr>
                            <th>Benefit</th>
                            <th>Impact</th>
                        </tr>
                        <tr>
                            <td>Higher Yields</td>
                            <td>Crop productivity increases by 5–15% (up to 30%).</td>
                        </tr>
                        <tr>
                            <td>Water Savings</td>
                            <td>Smart irrigation cuts water use by 20–30% (up to 50%).</td>
                        </tr>
                        <tr>
                            <td>Lower Chemical Use</td>
                            <td>Reduces pesticides & fertilizers by 15–30%.</td>
                        </tr>
                        <tr>
                            <td>Better Forecasting</td>
                            <td>Improves early disease detection.</td>
                        </tr>
                    </table>

                    <h3 style="color: #4da6ff; margin-top: 25px;">3. Main Applications (Precision Farming)</h3>
                    <p style="margin-top: 10px;">48% of AI in agriculture falls under precision farming. Applications include crop monitoring, livestock health, autonomous tractors, and smart irrigation.</p>

                    <h3 style="color: #4da6ff; margin-top: 25px;">4. Adoption Rates</h3>
                    <ul style="margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Large farms:</strong> 45–50% adoption.</li>
                        <li style="margin-bottom: 5px;"><strong>Small farms:</strong> 20–25% adoption (due to cost barriers).</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">5. Future Outlook</h3>
                    <p style="margin-top: 10px;">Growth of autonomous robots and drones. AI will increase agricultural intelligence, <strong>supporting human decision-making</strong> rather than replacing farmers.</p>

                    <h3 style="color: #4da6ff; margin-top: 25px;">6. Limitations & Risks</h3>
                    <ul style="list-style-type: square; margin-left: 20px; margin-top: 10px;">
                        <li style="margin-bottom: 5px;"><strong>Cost Barrier:</strong> High setup cost for small farms.</li>
                        <li style="margin-bottom: 5px;"><strong>Technology Inequality:</strong> Digital divide widens productivity gaps.</li>
                        <li style="margin-bottom: 5px;"><strong>Job Loss:</strong> Automation reduces labor requirements by 20–30%.</li>
                    </ul>

                    <h3 style="color: #4da6ff; margin-top: 25px;">Sources</h3>
                    <p style="font-size: 0.85em; margin-top: 5px; opacity: 0.8;">Future Market Insights, MRFR, IMARC, Precision Agriculture Reviews.</p>
                </div>
            `;
}

// --- FUNCTION 8: CONCLUSION (The Future) ---
function showConclusionContent() {
    resetActiveClasses();
    resetScroll(); // Reset scroll here
    document.getElementById('link-conclusion').classList.add('active');

    // Use a clean, futuristic background for conclusion
    document.body.style.backgroundImage = "url('https://img.freepik.com/free-photo/representation-user-experience-interface-design-computer_23-2150169865.jpg')";

    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
                <div class="content-box">
                    <h1 style="border-bottom: 2px solid #2a7aa5; padding-bottom: 10px; margin-bottom: 20px;">The Future: Integration, Not Replacement</h1>
                    
                    <p style="margin-top: 10px; font-size: 1.1em; line-height: 1.6;">
                        Based on the analysis across all sectors, the verdict is clear: <strong>Artificial Intelligence is not here to replace humans, but to transform their roles and enhance their capabilities.</strong>
                    </p>

                    <h3 style="color: #4da6ff; margin-top: 30px;">1. Collaboration vs. Replacement</h3>
                    <p style="margin-top: 10px;">The consensus in fields like Medicine, Education, and Agriculture emphasizes the <strong>"Human-in-the-Loop"</strong> model. Doctors, teachers, and farmers remain the final decision-makers, while AI acts as a powerful assistant that provides a "second opinion" or handles the heavy lifting of repetitive tasks.</p>

                    <h3 style="color: #4da6ff; margin-top: 25px;">2. The Shift in Skills</h3>
                    <p style="margin-top: 10px;">The future will not be about the disappearance of jobs, but the <strong>evolution of skills</strong>. Human roles will shift from memorization and repetition to managing complex data, critical thinking, and emotional empathy—skills that machines cannot easily replicate.</p>

                    <h3 style="color: #4da6ff; margin-top: 25px;">3. Challenges & Responsibility</h3>
                    <p style="margin-top: 10px;">Despite the immense benefits, adopting AI brings serious challenges regarding data privacy, algorithmic bias, and high implementation costs. Success depends on building strong regulatory and ethical frameworks to ensure safe and fair use.</p>

                    <h3 style="color: #4da6ff; margin-top: 25px;">4. Future Outlook</h3>
                    <p style="margin-top: 10px;">We are moving towards a world of <strong>"Smart Environments"</strong>—hospitals, factories, and classrooms that automatically adapt to human needs. The massive projected market growth indicates that we are still only at the beginning of the AI era.</p>

                    <div style="background: rgba(42, 122, 165, 0.3); padding: 20px; border-radius: 10px; margin-top: 30px; border-left: 5px solid white;">
                        <h3 style="color: white; margin: 0;">Final Conclusion</h3>
                        <p style="margin-top: 10px; font-style: italic;">"AI will not replace experts, but experts who use AI will replace those who do not."</p>
                    </div>
                </div>
            `;
}

// --- FUNCTION 9: OUR TEAM ---
function showTeamContent() {
    resetActiveClasses();
    resetScroll(); // Reset scroll here
    document.getElementById('link-team').classList.add('active');

    // التعديل: تغيير خلفية فريق العمل
    document.body.style.backgroundImage = "url('imag-team.jpeg')";

    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
                <div class="content-box">
                    <h1 style="border-bottom: 2px solid #2a7aa5; padding-bottom: 10px; margin-bottom: 20px;">Meet the Minds Behind the Vision</h1>
                    
                    <p style="margin-top: 10px; font-size: 1.1em; line-height: 1.6;">
                        We are a dedicated team of six students from the <strong>Faculty of Computers and Artificial Intelligence, Fayoum University</strong>. United by our passion for Front-End Development and Artificial Intelligence research, we aim to integrate cutting-edge AI solutions into accessible web interfaces.
                    </p>

                    <h3 style="color: #4da6ff; margin-top: 30px; text-align: center;">Our Team Members</h3>
                    
                    <div class="team-grid">
                        <div class="team-member">
                            <div class="member-img">
                                <img src="https://scontent.fcai19-11.fna.fbcdn.net/v/t39.30808-6/471239197_3873482639606178_2183626033041066002_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=y5CpthZV8jEQ7kNvwEuQcYW&_nc_oc=Adm_CtbCcwtQrD8iMmorv9ZWiPLmiioowIKlN1ghOKusESBiD0iU98nwjAlID1Knaxw&_nc_zt=23&_nc_ht=scontent.fcai19-11.fna&_nc_gid=Y0pXj0zupNMND9w4KSeYnw&oh=00_Afl7ygFzIIdMwfHv0P6LCP9cofmNeSbXKuwgfq8RolQYsw&oe=6944C57B" alt="Amir Raafat">
                            </div>
                            <h3>Amir Raafat</h3>
                            <p>Motivated CS student eager to apply skills in Cybersecurity and contribute to challenging projects.</p>
                            <a href="https://www.linkedin.com/in/amir-raafat-0a4b02356/" target="_blank" class="linkedin-btn"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        </div>
                        <div class="team-member">
                            <div class="member-img">
                                <img src="https://media.licdn.com/dms/image/v2/D4E03AQHRghMTxC319w/profile-displayphoto-scale_400_400/B4EZiFNZtpHIAk-/0/1754581541223?e=1766620800&v=beta&t=3BrqbHIRDs8d-y2TUSoPfg108eAUw-S4liwh-YVVM8k" alt="Samir Makram">
                            </div>
                            <h3>Samir Makram</h3>
                            <p>CS Student passionate about AI, Software Dev & solving real-world problems.</p>
                            <a href="https://www.linkedin.com/in/samir-makram?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="linkedin-btn"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        </div>
                        <div class="team-member">
                            <div class="member-img">
                                <img src="https://media.licdn.com/dms/image/v2/D4D03AQHt-ktWUEuWOg/profile-displayphoto-crop_800_800/B4DZr7bmyHHsAM-/0/1765154910002?e=1766620800&v=beta&t=HrPFfUj388Hyr6s36I55qsrqsZmcQPoVEFbHFxHXWvE" alt="Maria Ibrahim">
                            </div>
                            <h3>Maria Ibrahim</h3>
                            <p>Project-driven CS Student focused on solving real-world problems through code.</p>
                            <a href="https://www.linkedin.com/in/maria-ibrahim-650391326/" target="_blank" class="linkedin-btn"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        </div>
                        <div class="team-member">
                            <div class="member-img">
                                <img src="https://media.licdn.com/dms/image/v2/D4E22AQHCDZ-aQNdR9g/feedshare-shrink_2048_1536/B4EZnI8msmHEAw-/0/1760012967327?e=1766620800&v=beta&t=tHUImzBcNtJwc7c_uTANGMzx2WR7umXZljBu_KTBpxE" alt="Maria Atef">
                            </div>
                            <h3>Maria Atef</h3>
                            <p>CS student motivated by AI, full-stack development, and data science.</p>
                            <a href="https://www.linkedin.com/in/maria-atef-ghaly-019624282/" target="_blank" class="linkedin-btn"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        </div>
                        <div class="team-member">
                            <div class="member-img">
                                <img src="https://media.licdn.com/dms/image/v2/D4E03AQG7_aPrkN5KFQ/profile-displayphoto-scale_200_200/B4EZr.YnQeGcAY-/0/1765204458765?e=1766620800&v=beta&t=9HxGqLEsPkrpI7COQwOtRZ7E0jx5z-ovfmXJo_3_RlY" alt="Marina">
                            </div>
                            <h3>Marina Melad</h3>
                            <p>CS & AI Student | Data Analysis Enthusiast & Problem Solver.</p>
                            <a href="https://www.linkedin.com/in/marina-melad-9251a537a" target="_blank" class="linkedin-btn"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        </div>
                        <div class="team-member">
                            <div class="member-img">
                                <img src="https://media.licdn.com/dms/image/v2/D4D03AQFxnc7rFQowJQ/profile-displayphoto-scale_200_200/B4DZr.iRUsG4Ac-/0/1765206995019?e=1766620800&v=beta&t=rV6fH8fTv7_zi-jfOdVl6bJhbtvw3FWmm8ktpOKcvzE" alt="Marly">
                            </div>
                            <h3>Marly Emad</h3>
                            <p>CS & AI Student | Data Analysis Enthusiast & Problem Solver.</p>
                            <a href="https://www.linkedin.com/in/marley-emad-naeem-malak-4a908b386?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" class="linkedin-btn"><i class="fab fa-linkedin"></i> LinkedIn</a>
                        </div>
                    </div>

                    <div style="background: rgba(42, 122, 165, 0.2); padding: 25px; border-radius: 15px; margin-top: 40px; border-left: 5px solid #4da6ff;">
                        <h3 style="color: #4da6ff; margin-bottom: 10px;">Our Mission</h3>
                        <p style="line-height: 1.6; font-style: italic;">
                            "Our mission is to explore the synergy between intuitive user interfaces and powerful AI algorithms. We believe that the future of technology lies in making complex intelligence accessible to everyone through seamless design and robust development. By bridging the gap between academic research and practical application, we strive to build solutions that not only solve problems but also inspire the next generation of developers."
                        </p>
                    </div>

                    <div class="contact-form-container">
                        <h3 style="color: #4da6ff; margin-bottom: 20px; text-align: center;">Contact Us</h3>
                        
                        <div class="contact-form">
                            <label for="name">Name:</label>
                            <input type="text" id="name" placeholder="Enter your name">
                            
                            <label for="email">Email:</label>
                            <input type="email" id="email" placeholder="Enter your email">
                            
                            <label for="message">Message:</label>
                            <textarea id="message" rows="5" placeholder="Write your message here..."></textarea>
                            
                            <button class="contact-btn">Send Message</button>
                        </div>

                        <div style="margin-top: 30px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">
                            <p style="margin-bottom: 15px; color: #ccc;">Or chat with us directly on WhatsApp:</p>
                            <a href="https://wa.me/201203002774" target="_blank" class="whatsapp-link">
                                <i class="fa-brands fa-whatsapp" style="font-size: 20px;"></i>
                                Amir Raafat
                            </a>
                        </div>
                    </div>

                </div>
            `;
}

// Load Overview by default when page loads
window.onload = showOverviewContent;