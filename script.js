const $=(s,p=document)=>p.querySelector(s),$$=(s,p=document)=>[...p.querySelectorAll(s)];const WA='919929562585';
const images={
schoolPortrait:'https://images.pexels.com/photos/30889597/pexels-photo-30889597.jpeg?auto=compress&cs=tinysrgb&w=2000',
classroomIndia:'https://images.pexels.com/photos/35551059/pexels-photo-35551059.jpeg?auto=compress&cs=tinysrgb&w=2000',
collegeIndia:'https://images.pexels.com/photos/32275471/pexels-photo-32275471.jpeg?auto=compress&cs=tinysrgb&w=2000',
girlsSchool:'https://images.pexels.com/photos/12199101/pexels-photo-12199101.jpeg?auto=compress&cs=tinysrgb&w=2000',
childrenIndia:'https://images.pexels.com/photos/5909870/pexels-photo-5909870.jpeg?auto=compress&cs=tinysrgb&w=2000',
classroom:'https://images.pexels.com/photos/8199160/pexels-photo-8199160.jpeg?auto=compress&cs=tinysrgb&w=2000',
campus:'https://images.pexels.com/photos/8199228/pexels-photo-8199228.jpeg?auto=compress&cs=tinysrgb&w=2000',
studyGroup:'https://images.pexels.com/photos/7683734/pexels-photo-7683734.jpeg?auto=compress&cs=tinysrgb&w=2000',
teacher:'https://images.pexels.com/photos/8617971/pexels-photo-8617971.jpeg?auto=compress&cs=tinysrgb&w=2000',
teacherClass:'https://images.pexels.com/photos/18931270/pexels-photo-18931270.jpeg?auto=compress&cs=tinysrgb&w=2000',
collegeBooks:'https://images.pexels.com/photos/6549907/pexels-photo-6549907.jpeg?auto=compress&cs=tinysrgb&w=1600',
campusWalk:'https://images.pexels.com/photos/7683887/pexels-photo-7683887.jpeg?auto=compress&cs=tinysrgb&w=1600'
};
const colors=[{name:'Academic Blue',hex:'#2d7cff'},{name:'Emerald',hex:'#16866a'},{name:'Royal Purple',hex:'#7555d8'},{name:'Orange',hex:'#ec7e28'},{name:'Crimson',hex:'#c43d58'},{name:'Cyan',hex:'#00a8c6'},{name:'Navy',hex:'#315078'},{name:'Gold',hex:'#ba873e'}];
const texts=[
{name:'Ambitious',k:'Admissions Open · Classroom & Online Learning',t:'Build Strong Concepts. Aim Higher.',p:'A modern academy experience for school students, JEE, NEET, foundation and skill-based learning with clear courses, counselling and admission support.'},
{name:'School',k:'Learning · Character · Curiosity',t:'A School Experience Built for Confident Learners.',p:'Academics, activities, faculty and parent communication presented through one clear admission journey.'},
{name:'JEE',k:'JEE Main & Advanced Preparation',t:'From Fundamentals to Competitive Problem Solving.',p:'Course structure, tests, faculty, scholarship and counselling organised for informed preparation decisions.'},
{name:'NEET',k:'Medical Entrance Preparation',t:'Prepare With Clarity, Consistency and Feedback.',p:'Biology, chemistry and physics preparation supported by assessment, doubt sessions and academic guidance.'},
{name:'Foundation',k:'Class 6–10 Foundation Programmes',t:'Start Early Without Turning Learning Into Pressure.',p:'Strong school concepts, mental ability, olympiad readiness and healthy study habits.'},
{name:'Skills',k:'Practical Skills · Modern Careers',t:'Learn Skills That Travel Beyond the Classroom.',p:'Spoken English, computing, communication and career-oriented learning for students and graduates.'},
{name:'Parent',k:'Parent-Friendly Admission Experience',t:'Every Important Detail Before You Enrol.',p:'Courses, batch timings, fees, demo classes, scholarship rules and support explained clearly.'}
];
const heroStyles=[
{name:'Modern Coaching',className:'hero-01',photo:images.classroomIndia,color:'#2d7cff',text:0,card:['Featured Programme','JEE Foundation Track','Class 9–10 · Science, Mathematics, Mental Ability and problem-solving']},
{name:'Premium School',className:'hero-02',photo:images.schoolPortrait,color:'#ba873e',text:1,card:['School Admissions','Middle School Programme','Academics · Activities · Student support · Parent communication']},
{name:'JEE Performance',className:'hero-03',photo:images.studyGroup,color:'#7555d8',text:2,card:['Engineering Track','JEE Main + Advanced','Class 11–12 · Classroom, online and hybrid options']},
{name:'Minimal Academic',className:'hero-04',photo:images.collegeBooks,color:'#315078',text:6,card:['Admissions Guide','Course Selection Session','Class · Goal · Mode · Batch · Fee guidance']},
{name:'NEET Learning',className:'hero-05',photo:images.classroom,color:'#16866a',text:3,card:['Medical Track','NEET Preparation','Physics · Chemistry · Biology · Test analysis']},
{name:'Foundation Energy',className:'hero-06',photo:images.girlsSchool,color:'#ec7e28',text:4,card:['Foundation Track','Class 6–10 Learning','School subjects · Mental ability · Olympiad preparation']},
{name:'Campus Life',className:'hero-07',photo:images.campusWalk,color:'#00a8c6',text:1,card:['Campus Experience','Learning Beyond Class','Clubs · Activities · Mentoring · Student community']},
{name:'Technology Learning',className:'hero-08',photo:images.classroomIndia,color:'#c43d58',text:5,card:['Skill Programme','Digital & Communication Skills','Computing · Spoken English · Practical projects']},
{name:'Community School',className:'hero-09',photo:images.childrenIndia,color:'#16866a',text:1,card:['Learning Community','Primary & Middle Years','Supportive learning · Participation · Confidence']},
{name:'College Academy',className:'hero-10',photo:images.collegeIndia,color:'#315078',text:5,card:['Higher Education Skills','Career Preparation','Communication · Technology · Employability skills']}
];
const courses=[
{id:1,name:'JEE Main + Advanced',klass:'Class 11–12',goal:'JEE',mode:'Hybrid',city:'Jaipur',duration:'2 Years',subjects:'Physics · Chemistry · Mathematics',image:images.studyGroup},
{id:2,name:'NEET Preparation',klass:'Class 11–12',goal:'NEET',mode:'Classroom',city:'Delhi NCR',duration:'2 Years',subjects:'Physics · Chemistry · Biology',image:images.classroom},
{id:3,name:'Foundation Programme',klass:'Class 9–10',goal:'Foundation',mode:'Hybrid',city:'Jaipur',duration:'2 Years',subjects:'Science · Maths · Mental Ability',image:images.girlsSchool},
{id:4,name:'School Excellence',klass:'Class 6–8',goal:'School Excellence',mode:'Classroom',city:'Jaipur',duration:'1 Year',subjects:'Science · Maths · English · SST',image:images.schoolPortrait},
{id:5,name:'Olympiad Track',klass:'Class 6–8',goal:'Olympiad',mode:'Online',city:'Online',duration:'9 Months',subjects:'Science · Mathematics · Reasoning',image:images.teacherClass},
{id:6,name:'JEE Repeater',klass:'Dropper',goal:'JEE',mode:'Classroom',city:'Kota',duration:'1 Year',subjects:'Physics · Chemistry · Mathematics',image:images.classroomIndia},
{id:7,name:'Spoken English',klass:'Graduation',goal:'Spoken English',mode:'Online',city:'Online',duration:'12 Weeks',subjects:'Speaking · Listening · Interview',image:images.collegeIndia},
{id:8,name:'Computer Skills',klass:'Graduation',goal:'Computer Skills',mode:'Hybrid',city:'Delhi NCR',duration:'16 Weeks',subjects:'Office Tools · Web Basics · Projects',image:images.collegeBooks}
];
const results={
'JEE':['JEE Main · Sample Profile · 99.2 percentile','JEE Advanced · Sample Profile · Verified rank slot','JEE Main · Sample Profile · 98.7 percentile','JEE Main · Sample Profile · 97.9 percentile'],
'NEET':['NEET · Sample Profile · 690/720','NEET · Sample Profile · 672/720','NEET · Sample Profile · Verified rank slot','NEET · Sample Profile · 655/720'],
'Foundation':['Olympiad · Sample Profile · Medal category','School Board · Sample Profile · 96.4%','Scholarship Test · Sample Profile · Merit category','Foundation · Sample Profile · Academic improvement'],
'School':['Board Result · Sample Profile · 94.8%','School Result · Sample Profile · Subject excellence','Board Result · Sample Profile · 93.2%','School Result · Sample Profile · Academic growth']
};
const feeData=[
{name:'JEE Foundation',amount:'Request Verified Fee',facts:['Class 9–10','2-year programme','Classroom / hybrid options','Scholarship policy applicable']},
{name:'JEE Main + Advanced',amount:'Request Verified Fee',facts:['Class 11–12','Course and test series','Study material','Centre-specific fee']},
{name:'NEET Preparation',amount:'Request Verified Fee',facts:['Class 11–12','Physics, Chemistry, Biology','Assessments and doubt support','Scholarship policy applicable']},
{name:'School Programme',amount:'Request Verified Fee',facts:['Class 6–10','Subject support','Periodic tests','Batch-specific fee']},
{name:'Skill Course',amount:'Request Verified Fee',facts:['Short-duration programme','Online / hybrid options','Project-based learning','Course-specific fee']}
];
let state={style:0,colorLocked:false,textLocked:false,fontLocked:false,auto:true},timer;
function rgb(hex){hex=hex.replace('#','');const n=parseInt(hex,16);return[(n>>16)&255,(n>>8)&255,n&255].join(',')}
function setColor(hex){document.documentElement.style.setProperty('--accent',hex);document.documentElement.style.setProperty('--accent-rgb',rgb(hex));$('#colorPicker').value=hex}
function setText(i){const x=texts[i];$('#heroKicker').textContent=x.k;$('#heroTitle').textContent=x.t;$('#heroText').textContent=x.p;$$('#textList button').forEach((b,n)=>b.classList.toggle('active',n===i))}
function setStyle(i,user=false){state.style=(i+heroStyles.length)%heroStyles.length;const x=heroStyles[state.style];$('.hero').className=`hero ${x.className}`;$('#heroPhoto').style.backgroundImage=`url("${x.photo}")`;if(!state.colorLocked)setColor(x.color);if(!state.textLocked)setText(x.text);$('#heroCardLabel').textContent=x.card[0];$('#heroCardTitle').textContent=x.card[1];$('#heroCardText').textContent=x.card[2];$('#styleName').textContent=`${String(state.style+1).padStart(2,'0')} · ${x.name}`;$$('#styleDots button').forEach((b,n)=>b.classList.toggle('active',n===state.style));$$('#styleList button').forEach((b,n)=>b.classList.toggle('active',n===state.style));if(user)restartAuto()}
function restartAuto(){clearInterval(timer);if(state.auto)timer=setInterval(()=>setStyle(state.style+1),60000)}
heroStyles.forEach((x,i)=>{const d=document.createElement('button');d.textContent=String(i+1).padStart(2,'0');d.onclick=()=>setStyle(i,true);$('#styleDots').appendChild(d);const b=document.createElement('button');b.textContent=x.name;b.onclick=()=>setStyle(i,true);$('#styleList').appendChild(b)});
colors.forEach(c=>{const b=document.createElement('button');b.style.background=c.hex;b.title=c.name;b.setAttribute('aria-label',c.name);b.onclick=()=>setColor(c.hex);$('#colorList').appendChild(b)});
texts.forEach((x,i)=>{const b=document.createElement('button');b.textContent=x.name;b.onclick=()=>setText(i);$('#textList').appendChild(b)});
function renderCourses(list=courses){$('#courseGrid').innerHTML=list.map(c=>`<article class="course-card reveal visible"><div class="course-card-photo" style="background-image:url('${c.image}')"></div><div class="course-card-body"><span class="eyebrow">${c.goal}</span><h3>${c.name}</h3><p>${c.subjects}</p><div class="course-meta"><span>${c.klass}</span><span>${c.mode}</span><span>${c.duration}</span><span>${c.city}</span></div><button data-course="${c.name}">View Course →</button></div></article>`).join('');$('#courseCount').textContent=`${list.length} ${list.length===1?'course':'courses'} available`;$$('[data-course]').forEach(b=>b.onclick=()=>wa(`Course enquiry\nCourse: ${b.dataset.course}\nPlease share eligibility, batch timing, verified fee and demo-class availability.`))}
function filterCourses(){const klass=$('#finderClass').value,goal=$('#finderGoal').value,mode=$('#finderMode').value,city=$('#finderCity').value;const list=courses.filter(c=>(klass==='All'||c.klass===klass)&&(goal==='All'||c.goal===goal)&&(mode==='All'||c.mode===mode)&&(city==='All'||c.city===city));renderCourses(list);$('#courses').scrollIntoView({behavior:'smooth'})}
$('#courseFinder').onsubmit=e=>{e.preventDefault();filterCourses()};$('#clearCourseFilter').onclick=()=>{$('#finderClass').value='All';$('#finderGoal').value='All';$('#finderMode').value='All';$('#finderCity').value='All';renderCourses()};
function wa(message){window.open(`https://wa.me/${WA}?text=${encodeURIComponent(message)}`,'_blank')}
$('#demoForm').onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);wa(`Demo class request\nStudent: ${f.get('student')}\nParent: ${f.get('parent')}\nPhone: ${f.get('phone')}\nClass: ${f.get('class')}\nGoal: ${f.get('goal')}\nMode: ${f.get('mode')}`)};
$('#contactForm').onsubmit=e=>{e.preventDefault();const f=new FormData(e.currentTarget);wa(`Academy website enquiry\nName: ${f.get('name')}\nInstitute: ${f.get('institute')}\nPhone: ${f.get('phone')}\nWebsite type: ${f.get('type')}\nMessage: ${f.get('message')}`)};
$('#scholarshipButton').onclick=()=>wa('Please share scholarship test eligibility, syllabus, dates, mode and terms.');
$$('[data-resource]').forEach(b=>b.onclick=()=>wa(`Please share the ${b.dataset.resource}.`));
$('#studentZone').onclick=()=>alert('Connect this button to the institute student portal or learning-management system.');
$('#centreVisit').onclick=()=>wa('I would like to book a centre visit and counselling session.');
const resultNames=Object.keys(results);resultNames.forEach((name,i)=>{const b=document.createElement('button');b.textContent=name;b.onclick=()=>setResultTab(name);$('#resultTabs').appendChild(b)});
function setResultTab(name){$('#studentResults').innerHTML=results[name].map((r,i)=>{const parts=r.split(' · ');return `<article class="result-card reveal visible"><span>${parts[0]}</span><h3>${parts[1]}</h3><p>Illustrative result profile. Replace with verified student details.</p><strong>${parts[2]}</strong></article>`}).join('');$$('#resultTabs button').forEach(b=>b.classList.toggle('active',b.textContent===name))}
$('#resultChecker').onsubmit=e=>{e.preventDefault();$('#resultModal').classList.add('open')};$('#modalClose').onclick=()=>$('#resultModal').classList.remove('open');$('#resultModal').onclick=e=>{if(e.target.id==='resultModal')e.currentTarget.classList.remove('open')};
feeData.forEach((x,i)=>{const b=document.createElement('button');b.textContent=x.name;b.onclick=()=>setFee(i);$('#feeSelector').appendChild(b)});
function setFee(i){const x=feeData[i];$('#feeCourse').textContent=x.name;$('#feeAmount').textContent=x.amount;$('#feeFacts').innerHTML=x.facts.map(v=>`<span>${v}</span>`).join('');$$('#feeSelector button').forEach((b,n)=>b.classList.toggle('active',n===i))}
$('#feeEnquiry').onclick=()=>wa(`Please share the verified fee structure and scholarship terms for ${$('#feeCourse').textContent}.`);
$('#previousStyle').onclick=()=>setStyle(state.style-1,true);$('#nextStyle').onclick=()=>setStyle(state.style+1,true);$('#autoToggle').onclick=e=>{state.auto=!state.auto;e.target.textContent=state.auto?'Pause Auto':'Play Auto';restartAuto()};$('#customizerToggle').onclick=()=>$('#customizerPanel').classList.toggle('open');$('#colorPicker').oninput=e=>setColor(e.target.value);$('#colorSearch').onchange=e=>{const v=e.target.value.trim().toLowerCase(),found=colors.find(c=>c.name.toLowerCase().includes(v));if(found)setColor(found.hex);else if(/^#[0-9a-f]{6}$/i.test(v))setColor(v)};$('#lockColor').onclick=e=>{state.colorLocked=!state.colorLocked;e.target.classList.toggle('locked',state.colorLocked);e.target.textContent=state.colorLocked?'Color Locked':'Lock Color'};$('#lockText').onclick=e=>{state.textLocked=!state.textLocked;e.target.classList.toggle('locked',state.textLocked);e.target.textContent=state.textLocked?'Text Locked':'Lock Text'};$('#fontSelect').onchange=e=>document.documentElement.style.setProperty('--font',e.target.value);$('#fontSearch').onchange=e=>{const v=e.target.value.trim();if(v)document.documentElement.style.setProperty('--font',`${v}, Arial, sans-serif`)};$('#lockFont').onclick=e=>{state.fontLocked=!state.fontLocked;e.target.classList.toggle('locked',state.fontLocked);e.target.textContent=state.fontLocked?'Font Locked':'Lock Font'};$('#themeToggle').onclick=e=>{const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';e.target.textContent=dark?'Light Mode':'Dark Mode'};$('#menuToggle').onclick=()=>{const n=$('#navLinks');n.classList.toggle('open');$('#menuToggle').setAttribute('aria-expanded',n.classList.contains('open'))};$$('#navLinks a').forEach(a=>a.onclick=()=>$('#navLinks').classList.remove('open'));document.addEventListener('keydown',e=>{if(e.key==='Escape')$('#resultModal').classList.remove('open')});
const observer=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)x.target.classList.add('visible')}),{threshold:.1});$$('.reveal').forEach(x=>observer.observe(x));
renderCourses();setResultTab('JEE');setFee(0);setStyle(0);restartAuto();