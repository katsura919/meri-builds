export interface Prompt {
  number: string;
  title: string;
  prompt: string;
  tip: string;
}

export interface Category {
  id: string;
  title: string;
  intro: string;
  prompts: Prompt[];
}

export const promptsData: Category[] = [
  {
    "id": "01",
    "title": "Building & Leading Your Virtual Team",
    "intro": "Most solo operators don't have an HR department, they have one VA and a hope that things work out. These 20 prompts cover hiring, onboarding, delegation, and the conversations that are easy to put off when there's no one to bounce them off.",
    "prompts": [
      {
        "number": "Prompt 01",
        "title": "Write a VA Job Post People Actually Apply To",
        "prompt": "Act as a recruiter who specializes in hiring virtual assistants for solo business owners and small service businesses. Here's what I'm working with:\n- Industry and what my business does: [DESCRIBE]\n- The role I'm hiring for: [ROLE, e.g., executive VA, social media VA, customer support VA]\n- Budget: [HOURLY RATE OR MONTHLY BUDGET]\n- How soon I need someone: [TIMEFRAME]\n- The last time a hire didn't work out, what went wrong: [DESCRIBE, OR SAY \"first hire\"]\n\nPlease give me:\n1. A job posting that filters out unqualified applicants in the opening two sentences\n2. The 5 must-have skills for this specific role, ranked by importance\n3. A \"day in the life\" paragraph describing what a typical week actually looks like\n4. 5 screening questions to ask every applicant before a call, with the answer that should make me say no\n5. Where to post this for the best quality of applicants given my budget\n\nWrite it in a tone that sounds like a real person hiring, not a corporate HR posting.",
        "tip": "Customize it: Tell it your worst past hire and what went wrong, it'll write screening questions that catch that exact pattern."
      },
      {
        "number": "Prompt 02",
        "title": "Build the Interview Scorecard",
        "prompt": "Act as a hiring consultant for small service businesses who has interviewed hundreds of candidates for remote and contractor roles. Here's the situation:\n- Role I'm interviewing for: [ROLE]\n- What this person needs to be good at on day one: [LIST 2-3 SKILLS]\n- Where past hires for similar roles have fallen short: [DESCRIBE, IF APPLICABLE]\n- How many candidates I'm interviewing: [NUMBER]\n\nPlease give me:\n1. 8 interview questions that reveal how someone actually works, not how they talk about working\n2. For each question, what a strong answer sounds like and what a weak or rehearsed answer sounds like\n3. A one-page scorecard with a 1-5 rating scale I can fill out live during the call\n4. 3 follow-up questions to use whenever an answer sounds memorized or vague\n\nKeep the language plain enough that I could hand this to someone else on my team to run the interview.",
        "tip": "Customize it: Paste in a candidate's actual resume bullet points and ask it to write questions specific to their claims."
      },
      {
        "number": "Prompt 03",
        "title": "Draft the First 30 Days for a New VA",
        "prompt": "Act as an onboarding specialist who designs remote employee ramp-up plans for small businesses. Here's my context:\n- The role and what they'll be doing: [ROLE AND RESPONSIBILITIES]\n- Start date: [DATE]\n- Tools they'll need access to: [LIST, e.g., GoHighLevel, Slack, Notion, Google Drive]\n- What \"fully ramped up\" looks like by day 30: [DESCRIBE]\n\nPlease give me:\n1. A welcome message I can send before their start date that sets the tone\n2. An hour-by-hour plan for day one covering logistics, tool access, and first introductions\n3. A day-by-day outline for the rest of week one\n4. A 30-day checklist of what they should know and be doing independently by month's end\n5. 3 check-in questions to ask at the end of week one to catch confusion early\n\nWrite this so a VA with zero context on my business could follow it without getting stuck.",
        "tip": "Customize it: Mention your tools (GoHighLevel, Slack, Notion, etc.) so the checklist references the actual platforms they'll log into."
      },
      {
        "number": "Prompt 04",
        "title": "Turn a Task in Your Head Into an SOP",
        "prompt": "Act as a process documentation expert who specializes in extracting undocumented knowledge from busy business owners. Here's what I need documented:\n- The task: [DESCRIBE THE TASK]\n- How often it happens: [FREQUENCY]\n- Tools or logins involved: [LIST]\n- The version of this that usually goes wrong: [DESCRIBE A TIME IT DID]\n\nFirst, ask me 5-7 clarifying questions about anything that's unclear or that you'd need to know to write this accurately. After I answer, write:\n1. A numbered, step-by-step SOP using the tools I named\n2. A short troubleshooting section covering the 2-3 most common ways this goes wrong\n3. A \"definition of done\" so whoever runs this knows when they're finished\n4. A one-line summary at the top describing who this is for and how long it takes\n\nWrite the steps specific enough that someone who has never done this task could complete it without asking me anything.",
        "tip": "Customize it: Answer its questions in voice-to-text if typing feels like a chore, a rough transcript is enough for it to work with."
      },
      {
        "number": "Prompt 05",
        "title": "Write the Delegation Script You Keep Avoiding",
        "prompt": "Act as a delegation coach who works with overwhelmed solo business owners who struggle to let go of tasks. Here's what I'm avoiding:\n- The task: [DESCRIBE TASK]\n- Why I haven't handed it off yet, be honest: [E.G., nobody does it as well as me, I haven't had time to explain it, I'm worried about quality]\n- Who I'd hand it to: [ROLE OR PERSON]\n- What \"done well\" looks like for this task: [DESCRIBE]\n\nPlease give me:\n1. The exact message I'd send to delegate this task, written the way I'd actually talk\n2. A clear description of what \"done well\" looks like that I can include in the message\n3. What I need back from them and by when\n4. A version of this message I could send to a client if the handoff affects them directly\n5. One question to ask myself if I catch myself wanting to take the task back within the first week\n\nKeep the tone direct and human, not like a corporate handoff memo.",
        "tip": "Customize it: If the task involves a client, ask it to also draft the version that explains the handoff to the client."
      },
      {
        "number": "Prompt 06",
        "title": "Set Up a Weekly Check-In That Doesn't Waste Anyone's Time",
        "prompt": "Act as an operations consultant who designs lean communication rhythms for small remote teams. Here's my team:\n- Number of people and their roles: [LIST]\n- Time zones involved, if relevant: [LIST]\n- Current check-in situation: [DESCRIBE, OR SAY \"we don't have one\"]\n- Biggest communication gap right now: [DESCRIBE]\n\nPlease give me:\n1. A 15-minute weekly check-in format with the exact questions to ask\n2. What information should be shared asynchronously instead of discussed live, and where it should live\n3. A reusable template I can copy every week instead of rebuilding the agenda\n4. An async version of this check-in for weeks when live overlap isn't possible\n5. One sign that this check-in has stopped being useful and should be redesigned\n\nKeep this realistic for a team that's busy, not a corporate standup format.",
        "tip": "Customize it: Ask for a Slack or async version too if your team doesn't always overlap in real time."
      },
      {
        "number": "Prompt 07",
        "title": "Translate Vague Feedback Into Useful Feedback",
        "prompt": "Act as a communication coach who helps non-confrontational leaders give direct, useful feedback without damaging the relationship. Here's my situation:\n- The issue I need to address: [DESCRIBE THE ISSUE PLAINLY]\n- My tendency when giving feedback: [E.G., I avoid it entirely, I soften it until it doesn't land, I over-explain]\n- Whether this is the first time I'm raising it or a repeat issue: [SPECIFY]\n- My relationship with this person: [DESCRIBE BRIEFLY]\n\nPlease give me:\n1. The exact opening line to start this conversation\n2. The 2-3 things I need to say clearly, without softening them into vagueness\n3. How to respond if they get defensive or push back\n4. A written version of this message in case a live conversation isn't realistic\n5. One question to ask at the end to confirm they understood what's actually changing\n\nWrite this in a tone that's direct but not harsh, and skip any corporate HR language.",
        "tip": "Customize it: Tell it whether this is a first conversation or the third time you've raised it, the tone should shift."
      },
      {
        "number": "Prompt 08",
        "title": "Build a One-Page Culture Doc for a Team of 3",
        "prompt": "Act as a culture consultant who works specifically with small remote teams of contractors and VAs, not enterprise HR departments. Here's my context:\n- Industry and what my business does: [DESCRIBE]\n- Team size and roles: [LIST]\n- A moment that captures how we actually operate, good or bad: [DESCRIBE]\n- What I want this team to be known for: [E.G., speed, care, reliability]\n\nPlease give me:\n1. A one-page culture document covering how we communicate day to day\n2. How we handle mistakes when they happen\n3. What \"good work\" looks like here in plain, specific terms\n4. One clear dealbreaker, something that would make working with us not a fit\n5. A short paragraph I could read out loud to a new hire on their first day\n\nKeep the language warm but specific, nothing that could apply to literally any business.",
        "tip": "Customize it: Share one specific moment that captures your culture, good or bad, it gives the AI something real to anchor the language to."
      },
      {
        "number": "Prompt 09",
        "title": "Write the Time Zone Communication Rules",
        "prompt": "Act as a remote work consultant who designs communication policies for distributed teams of contractors and VAs. Here's my setup:\n- Time zones on my team: [LIST]\n- Our actual overlap hours, if any: [DESCRIBE]\n- Current biggest time zone problem: [DESCRIBE, e.g., things get dropped overnight, urgent issues sit for hours]\n\nPlease give me:\n1. A short communication policy covering response time expectations by channel\n2. A clear definition of what counts as urgent versus what can wait\n3. A handoff protocol for the end of someone's workday so nothing falls through overnight\n4. The exact wording to use when something truly is urgent, so it doesn't get lost in routine messages\n5. One thing I should stop expecting given our actual overlap hours\n\nWrite it as a one-page reference document, not a long policy manual.",
        "tip": "Customize it: Mention your actual overlap hours, the policy should be built around the real window you share."
      },
      {
        "number": "Prompt 10",
        "title": "Diagnose Why a Task Keeps Coming Back to You",
        "prompt": "Act as a delegation diagnostician who helps business owners figure out why handoffs keep failing. Here's the pattern:\n- The task: [TASK]\n- Who I delegated it to: [ROLE]\n- What \"coming back to me\" actually looks like, with specific wording if you have it: [DESCRIBE]\n- How long this has been happening: [TIMEFRAME]\n\nPlease walk me through:\n1. The 5 most likely reasons this keeps happening: unclear instructions, wrong person for the task, missing authority to make decisions, no feedback loop, or something else entirely\n2. Ask me 3-4 questions to help narrow down which one applies here\n3. Based on my answers, your best guess at the real root cause\n4. The specific fix for that root cause, not a generic delegation tip\n5. One way to test in the next 2 weeks whether the fix actually worked\n\nBe direct with me even if the likely answer is something I don't want to hear.",
        "tip": "Customize it: Be specific about what \"coming back\" looks like, exact wording from their messages helps it diagnose accurately."
      },
      {
        "number": "Prompt 11",
        "title": "Write a Role Description That Actually Describes the Role",
        "prompt": "Act as an HR consultant who specializes in writing accurate role descriptions for small businesses, not generic corporate templates. Here's the situation:\n- Everything this person currently does, even the undefined or messy parts: [LIST]\n- Their current title, if they have one: [TITLE]\n- What I'd want them taking on next, if anything: [DESCRIBE]\n\nPlease give me:\n1. A role description that reflects what they actually do day to day, not an aspirational version\n2. 2-3 growth responsibilities they could realistically take on next\n3. The 3 metrics or outcomes that would tell us they're succeeding in this role\n4. A short note on whether their current title still fits, given everything they actually do\n\nKeep this grounded in reality, not a wish list of what the role should ideally include.",
        "tip": "Customize it: List the responsibilities exactly as they happen now, even the messy or undefined ones."
      },
      {
        "number": "Prompt 12",
        "title": "Plan a Performance Conversation You're Dreading",
        "prompt": "Act as a coach who helps non-confrontational business owners prepare for hard conversations they've been avoiding. Here's what I'm dealing with:\n- Who this conversation is with and their role: [ROLE]\n- The issue: [ISSUE]\n- My tendency in conversations like this: [E.G., I avoid it, I over-explain, I get defensive if they push back]\n- What's already been said about this, if anything: [DESCRIBE]\n\nPlease give me:\n1. The opening line that starts this conversation without sounding like a setup for bad news\n2. The 2-3 things I need to say clearly and directly\n3. How to respond if they get defensive, deflect, or get emotional\n4. A written version in case this needs to happen over message instead of live\n5. What a successful outcome of this conversation actually looks like\n\nWrite this like a real conversation, not a script from an HR manual.",
        "tip": "Customize it: If this is a remote relationship, ask for a written version too in case a live call isn't realistic."
      },
      {
        "number": "Prompt 13",
        "title": "Build a Backup Plan for Your Most Critical Person",
        "prompt": "Act as a business continuity consultant who helps solo operators reduce dangerous single-person dependencies. Here's the risk:\n- The role or person: [ROLE/PERSON]\n- What would break if they were unreachable for two weeks starting tomorrow: [DESCRIBE]\n- How much of what they do is currently documented anywhere: [DESCRIBE, OR SAY \"none of it\"]\n- Who could realistically cover, even partially: [NAMES OR ROLES]\n\nPlease give me:\n1. A simple backup plan covering what needs to be documented first\n2. Who could cover what, even imperfectly, in an emergency\n3. The 3 things I should put in place this month so this isn't a crisis next time\n4. A short list of what clients or partners would need to be told if this person was out unexpectedly\n5. A test I could run in the next 30 days to see how exposed I actually am\n\nBe specific to my situation, not a generic business continuity checklist.",
        "tip": "Customize it: Be honest about how undocumented this role currently is, the plan changes a lot depending on that."
      },
      {
        "number": "Prompt 14",
        "title": "Write the \"How I Like to Work\" Doc for New Hires",
        "prompt": "Act as a working-styles consultant who helps business owners document how they operate so new hires don't have to guess. Ask me the following before writing anything:\n- How I prefer to communicate: written, async, or live calls\n- My pet peeves when working with others\n- How I give and want to receive feedback\n- What I need from people I work closely with to feel confident handing things off\n\nOnce I've answered, please give me:\n1. A clear one-page \"how I like to work\" document based on my answers\n2. A short version, 3-4 bullets, that could go in an onboarding packet\n3. One thing in my answers that might be hard for a new hire to figure out on their own, flagged explicitly\n4. A question I should ask any new hire in return, so it goes both ways\n\nKeep this honest rather than polished, even if some of my answers aren't flattering.",
        "tip": "Customize it: Answer the questions honestly, even the unflattering ones, this is more useful accurate than polished."
      },
      {
        "number": "Prompt 15",
        "title": "Write the Exit Interview Questions",
        "prompt": "Act as an HR consultant who specializes in getting honest, useful feedback from departing team members at small businesses. Here's the situation:\n- The role and how long they've been with me: [DESCRIBE]\n- Why they're leaving, if I already know: [DESCRIBE, OR SAY \"unclear\"]\n- What I'm most curious to learn from this conversation: [DESCRIBE]\n\nPlease give me:\n1. 8 exit interview questions designed to surface honest, useful feedback instead of polite answers\n2. A short script for opening the conversation so they feel safe being candid\n3. 2-3 follow-up questions to use if an answer feels too diplomatic to be useful\n4. How to ask about my own leadership or management without making them feel put on the spot\n5. What to do with the answers afterward so this isn't just a feel-good exercise\n\nWrite this as a real conversation guide, not a corporate HR form.",
        "tip": "Customize it: If you already suspect why they're leaving, mention it, it helps write a follow-up that gets past the polite version of the truth."
      },
      {
        "number": "Prompt 16",
        "title": "Draft a Pay Raise or Rate Increase Conversation",
        "prompt": "Act as a compensation consultant who helps small business owners handle raises and rate increases fairly and confidently. Here's my situation:\n- Who I want to give a raise or rate increase to: [ROLE]\n- Why, specifically: [REASON, e.g., took on more responsibility, performance, market rate]\n- My budget ceiling for this: [AMOUNT OR RANGE]\n- How this person currently feels about their compensation, if I know: [DESCRIBE]\n\nPlease give me:\n1. A fair number or range based on what I've described, with the reasoning behind it\n2. The message or talking points for how I bring this up\n3. How to handle it if they ask for more than my ceiling\n4. What I should document about this decision for future reference\n5. A timeline for when this should go into effect and how I'll communicate it\n\nKeep the tone confident, not apologetic about the business constraints involved.",
        "tip": "Customize it: Mention your budget ceiling upfront so the suggested number is something you can actually commit to."
      },
      {
        "number": "Prompt 17",
        "title": "Turn a Recurring Complaint Into a Process Fix",
        "prompt": "Act as an operations troubleshooter who specializes in finding the real root cause behind recurring team problems. Here's the issue:\n- The recurring problem: [DESCRIBE]\n- The last 2-3 times it happened, with specific details: [DESCRIBE]\n- Who's involved when it happens: [ROLES]\n- What's already been tried, if anything: [DESCRIBE]\n\nPlease help me figure out:\n1. Whether this is a training gap, a tooling gap, a process gap, or something else\n2. The questions I should ask to confirm which one it actually is\n3. The specific fix for whichever root cause applies, not a generic suggestion\n4. How to roll out this fix without it feeling like a punishment for past mistakes\n5. How I'll know in 30 days whether the fix actually worked\n\nBe willing to tell me if the real issue is something I'm not expecting.",
        "tip": "Customize it: Describe the last 2-3 times this happened with specific details, patterns are easier to spot with real examples."
      },
      {
        "number": "Prompt 18",
        "title": "Write the Handoff Doc Before You Go on Vacation",
        "prompt": "Act as an operations assistant who specializes in building handoff plans for solo business owners taking real time off. Here's my situation:\n- Dates I'll be away: [START DATE] to [END DATE]\n- What happened the last time I tried to unplug, if it didn't go well: [DESCRIBE]\n- Who's covering while I'm out: [NAME/ROLE]\n- What counts as a true emergency worth interrupting me for: [DESCRIBE]\n\nPlease give me:\n1. A handoff document covering what needs to be covered while I'm out\n2. Who's responsible for what, specifically\n3. A clear definition of what justifies interrupting my time off versus what should wait\n4. The exact message I'll send my team before going offline\n5. A short re-entry checklist for my first day back so I'm not drowning in catch-up\n\nWrite this so it actually protects my time off instead of just looking good on paper.",
        "tip": "Customize it: List what actually happened the last time you tried to unplug, the plan should prevent that specifically."
      },
      {
        "number": "Prompt 19",
        "title": "Build a Simple Capacity Check for Your Team",
        "prompt": "Act as a workload planning consultant who designs lightweight capacity tracking for small teams without formal time-tracking systems. Here's my team:\n- Roles and rough responsibilities: [LIST]\n- Who feels overloaded right now, based on your gut sense: [DESCRIBE]\n- Who has room for more, if anyone: [DESCRIBE]\n- How decisions about new work currently get assigned: [DESCRIBE]\n\nPlease give me:\n1. A quick capacity check I can run monthly, in plain language, no spreadsheets required\n2. The questions to ask each team member to estimate their real workload\n3. A simple way to flag who's overloaded versus who has room, even with rough numbers\n4. What to do once I know someone is consistently over capacity\n5. A rule for when \"we're busy\" actually means \"we need to hire\"\n\nKeep this realistic for a team that's never tracked capacity formally before.",
        "tip": "Customize it: Round numbers are fine, your honest gut sense of who's stretched thin is enough to start."
      },
      {
        "number": "Prompt 20",
        "title": "Write the \"We're Growing\" Announcement to Your Team",
        "prompt": "Act as an internal communications consultant who helps small business owners announce changes without creating anxiety on the team. Here's what's happening:\n- The change: [HIRING SOMEONE NEW, RESTRUCTURING A ROLE, CHANGING HOW WE WORK]\n- Why this is happening: [REASON]\n- The 2-3 questions I'm personally nervous someone will ask: [LIST]\n- How my team typically reacts to change: [DESCRIBE]\n\nPlease give me:\n1. The announcement message to my current team\n2. Direct answers to the questions I'm nervous about, addressed before anyone has to ask\n3. What this change means for each existing role, specifically\n4. A line that acknowledges this might feel uncertain, without being dramatic about it\n5. What I should be ready to answer live if someone brings up something I didn't anticipate\n\nWrite this in a tone that's confident and clear, not overly reassuring or vague.",
        "tip": "Customize it: List the 2-3 questions you're personally nervous someone will ask, the announcement should answer those head-on."
      }
    ]
  },
  {
    "id": "02",
    "title": "Systems, SOPs & Automation",
    "intro": "If a process only lives in your head, it's not a system, it's a single point of failure. These 20 prompts help you document what you already do, automate what doesn't need a human, and build the kind of operation that runs in GoHighLevel instead of in your inbox.",
    "prompts": [
      {
        "number": "Prompt 21",
        "title": "Turn a Messy Process Into a Clean SOP",
        "prompt": "Act as a process documentation specialist who helps solo and small business owners turn messy, undocumented processes into clear SOPs. Here's the process:\n- What happens, even if it's inconsistent or messy: [DESCRIBE]\n- Tools or platforms involved: [LIST]\n- Who currently does this: [ROLE]\n- Where it usually goes wrong: [DESCRIBE]\n\nFirst, ask me clarifying questions about anything unclear. Then give me:\n1. A numbered SOP with each step in order\n2. The tools needed at each step\n3. What \"done right\" looks like at the end\n4. A short troubleshooting section for the 2-3 most common issues\n5. How often this SOP should be reviewed and updated\n\nWrite it specific enough that someone brand new could follow it without asking me anything.",
        "tip": "Customize it: The messier your first answer, the better the SOP. Give it the real version, not the cleaned-up one."
      },
      {
        "number": "Prompt 22",
        "title": "Map Out a GoHighLevel Pipeline From Scratch",
        "prompt": "Act as a GoHighLevel automation consultant who builds sales pipelines for service businesses. Here's my situation:\n- What I sell: [PRODUCT/SERVICE]\n- My current sales process, even if it's rough: [DESCRIBE STAGES]\n- Where leads currently get stuck or lost: [DESCRIBE]\n- How many leads I get per month, roughly: [NUMBER]\n\nPlease give me:\n1. A pipeline with clear, specific stage names\n2. What triggers a lead moving from one stage to the next\n3. Which stages should have automated follow-up versus a manual touch from me\n4. A tag or field structure to track lead source and quality\n5. One report I should check weekly to know if the pipeline is healthy\n\nKeep the stage count reasonable, more than 6 or 7 usually means some should be merged.",
        "tip": "Customize it: List your actual stage names even if they're inconsistent right now, it'll tell you which ones to merge."
      },
      {
        "number": "Prompt 23",
        "title": "Build Your First Automation Without Overcomplicating It",
        "prompt": "Act as an automation strategist who works with non-technical business owners using tools like GoHighLevel, Zapier, or Make. Here's the task:\n- What I do manually every time, and what triggers it: [DESCRIBE]\n- How often this happens: [FREQUENCY]\n- Tools I currently have available: [LIST]\n- Roughly how much time this takes me each time: [ESTIMATE]\n\nPlease tell me:\n1. Whether this is actually worth automating, or whether it's better delegated or eliminated\n2. Which tool is the right fit given what I have available\n3. The exact trigger and the exact actions, step by step, in plain language, not code\n4. What could go wrong with this automation and how I'd catch it\n5. How I'll know the automation is working correctly after I set it up\n\nAssume I've never built an automation before and explain accordingly.",
        "tip": "Customize it: If you're not sure it's worth automating, ask it to confirm before building the steps."
      },
      {
        "number": "Prompt 24",
        "title": "Audit Your Tech Stack for Overlap",
        "prompt": "Act as a lean operations consultant who helps small businesses simplify their technology spend. Here's what I'm working with:\n- Every tool I currently pay for and its rough monthly cost: [LIST]\n- Tools I suspect I'm not using to their full potential: [LIST, IF KNOWN]\n- My biggest frustration with my current stack: [DESCRIBE]\n\nPlease give me:\n1. Which tools likely overlap in function\n2. Which ones I could consolidate into GoHighLevel or one other platform\n3. What I'd gain and lose by making each suggested change\n4. A rough estimate of the monthly savings if I made the changes\n5. The order I should tackle these changes in, starting with the easiest win\n\nBe specific to the tools I listed, not generic software advice.",
        "tip": "Customize it: Pull your actual billing statement line items if you want this to be fully accurate."
      },
      {
        "number": "Prompt 25",
        "title": "Design a Client Intake Flow That Doesn't Need You",
        "prompt": "Act as an operations designer who builds client intake systems for service businesses. Here's my current process:\n- What happens right now when a new client signs, even if it's just \"I message them\": [DESCRIBE]\n- How many clients I onboard per month: [NUMBER]\n- Tools available to me: [LIST, e.g., GoHighLevel, a VA, email]\n- The part of onboarding that currently eats the most of my time: [DESCRIBE]\n\nPlease give me:\n1. A complete intake flow from signed contract to first deliverable\n2. What should be automated at each step\n3. What a VA should handle without me involved\n4. What only I need to do personally, and why\n5. The first 3 things to fix if I could only improve part of this right now\n\nKeep this realistic for my actual volume of clients, not an enterprise-scale process.",
        "tip": "Customize it: Mention how many clients you onboard a month, the flow looks different at 2 a month versus 20."
      },
      {
        "number": "Prompt 26",
        "title": "Write the SOP for the Task Your VA Asks You About Most",
        "prompt": "Act as a documentation specialist who turns recurring questions into permanent SOPs. Here's the situation:\n- The task my VA keeps asking me about: [TASK]\n- What they usually get wrong or unsure about: [DESCRIBE]\n- Tools involved: [LIST]\n\nPlease give me:\n1. A complete SOP detailed enough that they'd never need to ask again\n2. The 2-3 edge cases that usually trip people up on this task\n3. A troubleshooting section written last, based on what's actually unclear\n4. A short summary at the top so they know what this covers before reading the whole thing\n5. One question to ask my VA after they use this SOP to confirm it actually worked\n\nWrite it in plain language, no internal jargon I haven't explained.",
        "tip": "Customize it: Ask it to write the troubleshooting section last, that's usually where the real gaps show up."
      },
      {
        "number": "Prompt 27",
        "title": "Design a Weekly Ops Review for a One-Person Leadership Team",
        "prompt": "Act as a solo-operator business coach who designs lightweight weekly reviews for owners without a leadership team. Here's my setup:\n- How my business is currently supported: [DESCRIBE: VAs, contractors, solo]\n- What currently falls through the cracks most often: [DESCRIBE]\n- Tools I use to track work: [LIST, e.g., GoHighLevel, spreadsheet, nothing formal]\n\nPlease give me:\n1. A 30-minute weekly review I can run entirely by myself\n2. The 5 questions to ask myself each week\n3. What to check in my CRM or GoHighLevel specifically\n4. What counts as a red flag worth addressing immediately versus something that can wait\n5. A simple way to track whether this review is actually catching problems over time\n\nMake this something I'd actually do every week, not an idealized version I'll abandon after two tries.",
        "tip": "Customize it: Run this for two weeks before tweaking it, the first version is rarely the final one."
      },
      {
        "number": "Prompt 28",
        "title": "Plan the Automation for Your No-Show Problem",
        "prompt": "Act as a GoHighLevel automation consultant who specializes in reducing no-shows for booked calls. Here's my situation:\n- Roughly what percentage or number of booked calls turn into no-shows: [ESTIMATE]\n- My current reminder process, if any: [DESCRIBE]\n- How calls are typically booked: [DESCRIBE, e.g., calendar link, manual booking]\n\nPlease give me:\n1. A complete reminder sequence with exact timing and channel for each touchpoint\n2. The message for each reminder, written so it doesn't feel robotic\n3. A no-show follow-up automation that tries to rebook without sounding desperate\n4. What to do with someone who no-shows twice in a row\n5. The one metric I should track to know if this is actually working\n\nMatch the intensity of the sequence to my real no-show rate, not a generic best practice.",
        "tip": "Customize it: Give it your actual no-show numbers if you have them, the sequence should match the real loss rate."
      },
      {
        "number": "Prompt 29",
        "title": "Turn Your Onboarding Emails Into an Automated Sequence",
        "prompt": "Act as an email automation specialist who builds onboarding sequences in GoHighLevel. Here's what I currently send manually:\n- The emails I send right now, even roughly: [LIST]\n- Which of these currently get a genuinely personal reply from me: [LIST]\n- How long onboarding typically takes from start to finish: [TIMEFRAME]\n\nPlease give me:\n1. A fully automated sequence with exact timing for each email\n2. Subject lines for each one\n3. Which emails should stay personal and not be automated, and why\n4. What should trigger the next email, time-based or action-based\n5. One way to track whether this sequence is actually reducing my manual onboarding work\n\nKeep the tone of each email consistent with how I'd actually write to a client.",
        "tip": "Customize it: Flag which emails currently get personal replies, those usually shouldn't be fully automated."
      },
      {
        "number": "Prompt 30",
        "title": "Build a Decision Tree for a Recurring Judgment Call",
        "prompt": "Act as a decision systems consultant who helps business owners build simple rules so their team can make decisions without escalating everything. Here's the decision:\n- What gets escalated to me: [DESCRIBE THE DECISION]\n- 2-3 real examples of times this decision went wrong: [DESCRIBE]\n- Who's currently escalating this to me: [ROLE]\n\nPlease give me:\n1. A simple decision tree or rule set they could use to make this call themselves most of the time\n2. The specific criteria for when it should still come to me\n3. How this prevents the exact mistakes I described from happening again\n4. The exact wording I'd use to hand this decision authority over\n5. A way to check in a month whether they're using the rules correctly\n\nKeep the rules simple enough to remember without looking them up every time.",
        "tip": "Customize it: Bring 2-3 real examples of times this decision went wrong, the rules should specifically prevent those."
      },
      {
        "number": "Prompt 31",
        "title": "Write the Process for Handling a Refund or Cancellation Request",
        "prompt": "Act as an operations consultant for service businesses who builds clear internal processes for handling refunds and cancellations. Here's my situation:\n- My current policy, or say I don't have one: [DESCRIBE]\n- Any past exceptions I've made: [DESCRIBE, IF APPLICABLE]\n- Who currently handles these requests: [ME/TEAM MEMBER]\n\nPlease give me:\n1. A clear internal process for how requests should be handled\n2. What my team can decide on their own versus what needs to come to me\n3. The exact message that should go out to the client in a standard case\n4. How to handle a request that falls outside the standard policy\n5. How this policy should be communicated to clients upfront, so requests are less likely to surprise anyone\n\nMake this fair to clients but protective of my business, not a one-sided policy.",
        "tip": "Customize it: If you've ever made an exception before, mention it, the policy needs to account for that precedent."
      },
      {
        "number": "Prompt 32",
        "title": "Design Your Client Project Tracker",
        "prompt": "Act as a project management consultant for small service businesses. Here's my context:\n- Number of active clients at a time: [NUMBER]\n- Current tracking method: [TOOL, OR \"nothing formal\"]\n- What currently gets missed or forgotten: [DESCRIBE]\n\nPlease give me:\n1. A simple tracker structure with no more than 8 fields\n2. Clear status options and what each one means\n3. What \"on track\" versus \"at risk\" actually looks like in practice\n4. How a VA could maintain this in 10 minutes a day\n5. One report I could pull from this tracker that would actually change a decision I make\n\nDesign this for a tool I could realistically build in a spreadsheet or GoHighLevel, not specialized software.",
        "tip": "Customize it: Keep the field list under 8, a tracker nobody updates is worse than no tracker."
      },
      {
        "number": "Prompt 33",
        "title": "Write the SOP for Following Up on Stalled Leads",
        "prompt": "Act as a sales operations consultant who builds lead follow-up systems for service businesses. Here's my situation:\n- The stage where leads most often go cold: [STAGE]\n- My average sales cycle length: [TIMEFRAME]\n- What follow-up currently happens, if any: [DESCRIBE]\n\nPlease give me:\n1. A follow-up SOP with the number of touches and timing between each\n2. What to say at each touch, getting progressively more direct\n3. The point at which a lead should be marked dead instead of followed up on forever\n4. How this should be set up in GoHighLevel as an automated or semi-automated sequence\n5. One thing to track to know if this follow-up sequence is recovering deals that would have otherwise been lost\n\nMatch the cadence to my real sales cycle, not a generic follow-up template.",
        "tip": "Customize it: Tell it your actual average days-to-close, the cadence should match your real sales cycle."
      },
      {
        "number": "Prompt 34",
        "title": "Build a Simple Quality Check Before Anything Goes to a Client",
        "prompt": "Act as a quality control consultant for service businesses. Here's what I deliver:\n- The deliverable: [DESCRIBE]\n- The last mistake that reached a client: [DESCRIBE]\n- Who currently checks quality before delivery, if anyone: [DESCRIBE]\n\nPlease give me:\n1. A pre-delivery checklist with 5 to 7 items maximum\n2. At least one checklist item that would have caught the mistake I described\n3. Wording simple enough that a VA could run this without needing my judgment\n4. What should happen if something fails the checklist\n5. How often this checklist should be reviewed and updated as the business changes\n\nKeep this short enough that people will actually use it every time, not skip it when busy.",
        "tip": "Customize it: Pull up your last client complaint and ask it to add a checklist item that would have caught it."
      },
      {
        "number": "Prompt 35",
        "title": "Map Your Client's Journey From Lead to Referral",
        "prompt": "Act as a customer journey consultant who maps client experiences for service businesses. Here's my context:\n- How someone typically first hears about me: [DESCRIBE]\n- The stages they go through until becoming a client: [DESCRIBE, EVEN ROUGHLY]\n- Where the journey currently breaks down or feels weak: [DESCRIBE]\n\nPlease give me:\n1. A complete map of every stage from first contact to becoming a repeat client or referral source\n2. What should happen automatically at each stage\n3. What needs a human touch, and from whom\n4. The single weakest stage right now, based on what I described, and why it's worth fixing first\n5. One small change I could make in the next 2 weeks to improve that weak stage\n\nBe specific to my actual business, not a generic customer journey template.",
        "tip": "Customize it: Be honest about where the journey currently breaks down, that's the stage worth fixing first."
      },
      {
        "number": "Prompt 36",
        "title": "Write the Process for What Happens When You're Sick",
        "prompt": "Act as a business continuity consultant for solo operators. Here's my risk:\n- What would be at risk if I couldn't work for a week starting tomorrow: [DESCRIBE]\n- Who could cover, even partially: [NAMES/ROLES]\n- What's currently documented anywhere: [DESCRIBE, OR SAY \"nothing\"]\n\nPlease give me:\n1. An \"if I'm out\" plan covering what my VA or team should handle without me\n2. What should simply wait until I'm back\n3. The message that should go out to clients if my absence affects them\n4. What needs to be documented now, before this becomes urgent\n5. A simple test I could run, like a short trial absence, to see how exposed I actually am\n\nMake this realistic for a true emergency, not a planned vacation.",
        "tip": "Customize it: List who could realistically cover for you, even partially, with real names attached."
      },
      {
        "number": "Prompt 37",
        "title": "Design the Monthly Report You Send Clients",
        "prompt": "Act as a client reporting consultant for service businesses. Here's my context:\n- How I currently update clients on results: [DESCRIBE, OR \"inconsistently\"]\n- The metrics that actually matter to my clients, in their language, not mine: [LIST]\n- An example of a past report, if I have one to share: [DESCRIBE OR PASTE]\n\nPlease give me:\n1. A simple monthly report template covering the metrics that matter most\n2. Language a non-technical client would understand, no jargon\n3. A short narrative section explaining what the numbers mean, not just listing them\n4. What should happen if a metric is trending the wrong way\n5. How long this report should take me or a VA to put together each month\n\nMatch this to my actual industry and the kind of results I deliver, not a generic marketing report.",
        "tip": "Customize it: Paste an example of a report you've sent before so it matches your real metrics, not generic ones."
      },
      {
        "number": "Prompt 38",
        "title": "Build the SOP for Hiring Your Next VA",
        "prompt": "Act as a hiring systems consultant who turns one-off hiring processes into repeatable systems. Here's my context:\n- What's gone wrong in past VA hires, if anything: [DESCRIBE]\n- Where I've had success finding candidates before: [DESCRIBE]\n- Interview questions that have worked well for me: [LIST, IF ANY]\n\nPlease give me:\n1. A complete SOP from posting the role to making the offer\n2. Where to post given my budget and the type of role\n3. How to screen applicants efficiently before a call\n4. The interview questions that have worked for me, refined and expanded\n5. A step specifically designed to catch the mistake I described from past hires\n\nWrite this so I could hand the entire hiring process to someone else and trust the outcome.",
        "tip": "Customize it: Include what's gone wrong in past hires, the SOP should build in a step that catches that specifically."
      },
      {
        "number": "Prompt 39",
        "title": "Turn Your Pricing Logic Into a Simple Rule",
        "prompt": "Act as a pricing strategy consultant for service businesses. Here's how I currently price:\n- My current pricing logic, even if it's \"I just guess\": [DESCRIBE]\n- 3-5 real past quotes I've given, if I have them: [LIST]\n- What factors actually change my pricing from client to client: [DESCRIBE]\n\nPlease give me:\n1. A clear pricing rule or simple calculator based on the factors I described\n2. How this should account for the real quotes I shared\n3. A way my team could quote a price without needing me involved every time\n4. What should always require my personal sign-off, regardless of the rule\n5. How to communicate a price calculated this way without sounding like a rigid formula to the client\n\nKeep this grounded in what I've actually charged before, not theoretical pricing strategy.",
        "tip": "Customize it: Give it 3-5 real past quotes if you have them, the rule should reflect what you've actually charged."
      },
      {
        "number": "Prompt 40",
        "title": "Design a 90-Day Plan to Get One Task Fully Off Your Plate",
        "prompt": "Act as a delegation strategist who builds structured handoff plans for solo business owners. Here's the task:\n- The task I want off my plate completely: [TASK]\n- Why I resent doing this task, specifically: [DESCRIBE]\n- Who could take this over: [ROLE/PERSON]\n- What's currently undocumented about how I do this: [DESCRIBE]\n\nPlease give me:\n1. A step-by-step 90-day plan broken into stages\n2. What needs to be documented first before any handoff happens\n3. The timeline for handing this off in stages rather than all at once\n4. How I'll know it's actually safe to fully let go\n5. What I'll do with the time this frees up, so the plan has a real payoff attached to it\n\nMake this specific enough that I could start on it this week, not just a conceptual outline.",
        "tip": "Customize it: Pick the task you resent doing the most, momentum matters more than picking the \"easiest\" one first."
      }
    ]
  },
  {
    "id": "03",
    "title": "Marketing & Content",
    "intro": "You don't need a marketing degree or a content calendar template you'll abandon in three weeks. These 20 prompts help you write in your own voice, build an email sequence that actually goes out, and turn the knowledge already in your head into content people want to read.",
    "prompts": [
      {
        "number": "Prompt 41",
        "title": "Find Your Actual Brand Voice, Not a Generic One",
        "prompt": "Act as a brand voice strategist who reverse-engineers a person's natural voice into a usable writing guide. Here's a real sample of how I talk to clients: [PASTE A REAL EMAIL, DM, OR VOICE NOTE TRANSCRIPT]. Also tell me:\n- What I do and who I serve: [DESCRIBE]\n- A brand or communicator whose voice I admire, and why: [DESCRIBE]\n- What I don't want to sound like: [DESCRIBE, e.g., corporate, salesy, overly formal]\n\nBased on the sample, please give me:\n1. My brand voice defined in 4 specific words, not generic ones like \"friendly\" or \"professional\"\n2. 3 examples of what this voice sounds like in writing\n3. 3 examples of what it should never sound like\n4. A short style note on sentence length, punctuation, and how I use contractions\n5. One thing in my sample that's distinctly mine and worth protecting as I write more content\n\nUse the actual sample as your primary reference, not a generic brand voice framework.",
        "tip": "Customize it: Use a real message you sent recently, not your best one, this works better with authentic samples."
      },
      {
        "number": "Prompt 42",
        "title": "Write a Month of Email Marketing Without Starting From Scratch",
        "prompt": "Act as an email marketing strategist who builds campaigns inside GoHighLevel for service-based businesses. Here's my context:\n- What I sell: [PRODUCT/SERVICE]\n- Who I'm selling to: [AUDIENCE]\n- My real send frequency goal: [WEEKLY, BIWEEKLY, ETC.]\n- What I want people to do after reading these emails: [SPECIFIC ACTION]\n\nPlease give me:\n1. A 4-week plan with one theme per week\n2. A subject line and a full draft for each email\n3. A clear call to action in every email that matches what I actually want\n4. Which email in the sequence is the most important one for driving the action I want\n5. How I'd measure whether this month of emails actually worked\n\nWrite the drafts in a voice that sounds like a real person, not a marketing template.",
        "tip": "Customize it: Tell it your real send frequency goal, weekly is a different plan than twice a month."
      },
      {
        "number": "Prompt 43",
        "title": "Turn One Piece of Content Into a Week of Posts",
        "prompt": "Act as a content repurposing strategist who turns long-form content into platform-specific posts. Here's the content: [PASTE A BLOG POST, VIDEO TRANSCRIPT, OR LONG CAPTION]. Also tell me:\n- The platform I'm repurposing for: [PLATFORM]\n- My posting frequency goal: [NUMBER OF POSTS PER WEEK]\n- What result I want from these posts: [E.G., engagement, leads, followers]\n\nPlease give me:\n1. 5 standalone posts pulled from this content, each with its own hook\n2. The best format for each one: carousel, single image, text post, short video script, etc.\n3. Which platform and format each idea fits best, if I'm cross-posting\n4. A posting order that builds on itself rather than feeling random\n5. One idea from this content that's strong enough to become its own separate piece later\n\nKeep each post able to stand alone without needing the original content to make sense.",
        "tip": "Customize it: Specify the platform you're repurposing for, a LinkedIn breakdown looks different from a TikTok one."
      },
      {
        "number": "Prompt 44",
        "title": "Write Instagram Captions That Sound Like You",
        "prompt": "Act as a social media copywriter who matches a specific person's natural voice instead of writing generic brand copy. Here's how I talk: [DESCRIBE OR PASTE 2-3 REAL CAPTIONS OR MESSAGES]. Also tell me:\n- The topic for these captions: [TOPIC]\n- My audience: [DESCRIBE]\n- What I want people to do after reading: [COMMENT, SAVE, DM, CLICK LINK, ETC.]\n\nPlease give me:\n1. 5 Instagram captions about this topic\n2. Each one using a different hook style: question, bold statement, story, stat, relatable struggle\n3. A call to action at the end of each one matching what I actually want\n4. Which of the 5 is most likely to perform best, and why\n5. One line in each caption that sounds distinctly like me, not a brand account\n\nMatch the sentence rhythm and tone of my real examples, not a generic Instagram voice.",
        "tip": "Customize it: Give it 3 real captions you've posted before so the voice match has something to work from."
      },
      {
        "number": "Prompt 45",
        "title": "Build a Lead Magnet From What You Already Know",
        "prompt": "Act as a lead generation strategist who helps experts package existing knowledge into lead magnets quickly. Here's my context:\n- What I know a lot about that I haven't packaged yet: [TOPIC]\n- What I already have to work from: [E.G., a PDF, a video, notes, nothing yet]\n- Who this would be for: [AUDIENCE]\n- What I want this lead magnet to lead to: [NEXT STEP, e.g., a call, a paid offer]\n\nPlease give me:\n1. The single most valuable, specific lead magnet I could create from this knowledge\n2. Why this specific angle beats a more generic version of the topic\n3. An outline of exactly what goes inside it, section by section\n4. How long it should realistically take me to create, given what I already have\n5. The exact call to action at the end that leads into my next step\n\nKeep the scope small enough that I could realistically finish this in under a week.",
        "tip": "Customize it: Mention what you already have, a PDF, a video, or notes, so it builds from real material."
      },
      {
        "number": "Prompt 46",
        "title": "Write the Welcome Email Sequence for New Subscribers",
        "prompt": "Act as an email marketing strategist who builds welcome sequences for new subscribers. Here's my context:\n- What they downloaded or signed up for: [LEAD MAGNET/OFFER]\n- What I want them to do by the end of the sequence: [SPECIFIC ACTION]\n- My brand voice in a sentence or two: [DESCRIBE]\n\nPlease give me:\n1. A 4-email welcome sequence with a clear goal for each email\n2. The subject line and full draft for each one\n3. The ideal send timing for each email after signup\n4. What changes in tone or content if someone doesn't engage with email 1\n5. The specific moment in this sequence where I should introduce my paid offer, if relevant\n\nWrite these so they read like a real person following up, not an automated drip campaign.",
        "tip": "Customize it: Tell it what action you want them to take by email 4, that's what the sequence should build toward."
      },
      {
        "number": "Prompt 47",
        "title": "Find the Content Pillars You Should Actually Post About",
        "prompt": "Act as a content strategist for solo business owners building a content plan from scratch. Here's my context:\n- Who I help and what I actually do for them: [DESCRIBE]\n- What I don't want to be known for, or topics I want to avoid: [DESCRIBE]\n- Where I currently post, if anywhere: [PLATFORMS]\n\nPlease give me:\n1. 4 content pillars I should be posting about consistently\n2. A one-sentence purpose for each pillar, explaining what it's meant to accomplish\n3. 10 specific post ideas under each pillar, 40 total\n4. Which pillar I should lean into most heavily right now, and why\n5. One pillar I might be missing that competitors in my space typically cover\n\nKeep the pillars specific to my actual expertise, not generic business advice categories.",
        "tip": "Customize it: Mention what you don't want to be known for, that narrows the pillars faster than describing what you do."
      },
      {
        "number": "Prompt 48",
        "title": "Write a Sales Page Section by Section",
        "prompt": "Act as a direct response copywriter who writes sales pages for service-based offers. Here's my context:\n- What I'm selling: [OFFER]\n- Who it's for: [AUDIENCE]\n- Price: [PRICE]\n- The transformation, from before to after: [BEFORE STATE] to [AFTER STATE]\n- The 3 objections people actually raise before buying: [LIST]\n\nPlease give me:\n1. A headline that leads with the transformation, not the offer name\n2. A problem section that names the real frustration in the audience's own words\n3. A solution section explaining my approach without overselling\n4. A clear list of what's included\n5. An FAQ section directly addressing the 3 objections I listed\n\nWrite this in a tone that's confident without being hypey, no fake urgency or exclamation points doing the persuading.",
        "tip": "Customize it: Paste in a page you admire, not to copy, but to show the tone you're aiming for."
      },
      {
        "number": "Prompt 49",
        "title": "Audit Your Last 10 Posts for What's Actually Working",
        "prompt": "Act as a social media analyst who finds patterns in content performance. Here are my last 10 posts and roughly how each performed: [PASTE OR DESCRIBE EACH ONE WITH ROUGH ENGAGEMENT]. Also tell me:\n- The platform: [PLATFORM]\n- What I was hoping these posts would accomplish: [GOAL]\n\nPlease give me:\n1. The pattern in what's working across the posts that performed well\n2. The pattern in what's not working across the ones that underperformed\n3. 3 specific changes to make in my next 10 posts based on this\n4. One post format or topic I should try that I haven't yet\n5. A simple way to track this same data going forward without it becoming a chore\n\nBe honest with me even if the pattern points to something I might not want to hear, like posting too inconsistently to draw a real conclusion.",
        "tip": "Customize it: Be honest about engagement numbers, even rough estimates surface the pattern."
      },
      {
        "number": "Prompt 50",
        "title": "Write a Newsletter People Actually Open",
        "prompt": "Act as an email newsletter strategist who builds simple, repeatable newsletter formats. Here's my context:\n- Who I'm writing to: [AUDIENCE]\n- What I want to write about regularly: [TOPIC]\n- My real send day and frequency: [DAY/FREQUENCY]\n\nPlease give me:\n1. 3 subject line formulas that tend to get opened, with an example of each for my topic\n2. A simple, repeatable structure I can reuse every single issue\n3. A full draft of issue #1 using that structure\n4. A short note on what should always stay the same and what should change issue to issue\n5. One way to know if this newsletter is actually working beyond just open rates\n\nWrite issue #1 so it sounds like a real person wrote it, not a template filled in.",
        "tip": "Customize it: Decide your real send day before asking, the structure works better when built around a fixed rhythm."
      },
      {
        "number": "Prompt 51",
        "title": "Turn a Client Win Into a Case Study",
        "prompt": "Act as a case study writer for service businesses. Here's what happened: [DESCRIBE THE SITUATION, WHAT YOU DID, AND THE RESULT]. Also tell me:\n- Whether I have the client's permission to share specifics: [YES/NOT YET]\n- Where I plan to use this case study: [WEBSITE, SALES PAGE, SOCIAL, ETC.]\n\nPlease give me:\n1. A short case study structured as challenge, approach, and result\n2. A pull quote I could ask the client to approve, based on what actually happened\n3. A version with identifying details removed, in case I don't have permission yet\n4. Where this case study would have the most impact given how I plan to use it\n5. A short message I could send the client to get their sign-off on the specifics\n\nStick closely to what actually happened, don't embellish numbers or outcomes I haven't confirmed.",
        "tip": "Customize it: Get client approval on the specifics before publishing, this is a draft for their review, not the final copy."
      },
      {
        "number": "Prompt 52",
        "title": "Write Your About Page So It Doesn't Sound Like Everyone Else's",
        "prompt": "Act as a brand storytelling consultant who writes About pages that lead with value, not just biography. Here's my context:\n- My background and why I started this business: [DESCRIBE]\n- What I do for clients, specifically: [DESCRIBE]\n- A page or brand whose About page tone I like: [DESCRIBE, IF ANY]\n\nPlease give me:\n1. An opening section that answers \"why should I work with you\" before anything personal\n2. A section telling my story in a way that supports that answer, not a separate narrative\n3. A closing section with a clear next step for the reader\n4. One sentence that's distinctly mine and couldn't be copy-pasted onto a competitor's page\n5. What to cut if the page feels too long, prioritizing what actually builds trust\n\nKeep the personal story in service of the reader's decision, not just a memoir.",
        "tip": "Customize it: Lead with the answer to \"why should I work with you,\" save the personal story for later in the page."
      },
      {
        "number": "Prompt 53",
        "title": "Plan a Content Calendar Around Your Launch Dates",
        "prompt": "Act as a launch marketing strategist who builds content calendars around specific launch dates. Here's my context:\n- What I'm launching: [OFFER]\n- Launch date: [DATE]\n- My launch goal, as a number: [GOAL]\n- Where I'll be posting: [PLATFORMS]\n\nPlease give me:\n1. A content calendar for the 4 weeks leading up to launch, with a theme and post idea for each day\n2. A separate plan for launch week itself\n3. A plan for the week after launch, including how to handle people who didn't buy\n4. The 3 most important pieces of content in this entire calendar, flagged clearly\n5. What to do if engagement is lower than expected halfway through\n\nBuild this around the real goal I gave you, not a generic launch content calendar.",
        "tip": "Customize it: Mention your launch goal as a number, the calendar should build toward a real stake."
      },
      {
        "number": "Prompt 54",
        "title": "Write the Re-Engagement Email for a Cold List",
        "prompt": "Act as an email marketing strategist using GoHighLevel who specializes in re-engaging cold subscribers. Here's my context:\n- How long counts as \"cold\" on my list, with an actual day count: [NUMBER OF DAYS]\n- What I last sent this list, if I know: [DESCRIBE]\n- What I want a re-engaged subscriber to do next: [ACTION]\n\nPlease give me:\n1. A re-engagement email that doesn't sound desperate or apologetic\n2. A subject line that earns an open from someone who's stopped paying attention\n3. A simple rule for what to do with anyone who still doesn't engage after this\n4. Whether I should send this once or as a short sequence, and why\n5. What this tells me about my list health overall, based on the cold percentage\n\nWrite the email so it reads like checking in with someone, not begging for attention.",
        "tip": "Customize it: Define \"cold\" with an actual day count, the tone should shift depending on how long it's been."
      },
      {
        "number": "Prompt 55",
        "title": "Build a Simple Brand Style Guide From Scratch",
        "prompt": "Act as a brand consultant who builds lightweight style guides for solo business owners without access to a designer. Here's my context:\n- Industry and audience: [DESCRIBE]\n- The vibe I'm going for: [DESCRIBE]\n- 2-3 brands whose look or voice I like, even outside my industry: [LIST]\n\nPlease give me:\n1. A suggested color palette with hex codes and a one-line reason for each choice\n2. A font pairing for headlines and body text\n3. 3 brand voice words with a short definition of each\n4. One thing to avoid given the vibe I described\n5. A simple way I could apply this consistently across social, email, and my website without hiring a designer\n\nKeep this simple enough that I could implement it myself this week.",
        "tip": "Customize it: Mention 2-3 brands whose vibe you like, even outside your industry, it sharpens the direction fast."
      },
      {
        "number": "Prompt 56",
        "title": "Write 10 Hooks for the Same Piece of Content",
        "prompt": "Act as a copywriter who specializes in scroll-stopping hooks. Here's what the content is about: [DESCRIBE]. Also tell me:\n- The platform this is for: [PLATFORM]\n- The audience: [AUDIENCE]\n\nPlease give me:\n1. 10 different opening lines for this content\n2. At least 5 different hook styles used across them: question, bold statement, story, stat, controversy, relatable struggle, etc.\n3. Which 3 you'd test first if you could only pick a few\n4. What makes each hook style suited to a different kind of reader\n5. One hook that's a bigger swing than the others, in case I want to take a risk\n\nKeep every hook under two sentences, the point is to stop the scroll, not explain the whole idea.",
        "tip": "Customize it: Test at least 3 of the 10 hooks for real before assuming you know which one will win."
      },
      {
        "number": "Prompt 57",
        "title": "Turn Client Testimonials Into Marketing Copy",
        "prompt": "Act as a conversion copywriter who extracts usable marketing copy from raw testimonials. Here are some testimonials I've received: [PASTE THEM]. Also tell me:\n- Where I might use this copy: [WEBSITE, SALES PAGE, SOCIAL, EMAIL]\n- Whether I have permission to use specific names: [YES/NO]\n\nPlease give me:\n1. The 3 most compelling specific phrases, not generic praise like \"great experience\"\n2. Where each one could be used, matched to the channels I listed\n3. A short post or graphic concept built around the strongest one\n4. What's missing from these testimonials that I should ask for next time\n5. A version with names removed, in case I need to use one without explicit permission\n\nPull out specifics and numbers wherever they exist, that's what actually persuades.",
        "tip": "Customize it: Get permission before publishing any testimonial copy, even when it's just rewording their own words."
      },
      {
        "number": "Prompt 58",
        "title": "Write the Email That Announces a Price Increase",
        "prompt": "Act as a client communication strategist who writes price increase announcements. Here's my context:\n- Old price: [OLD PRICE]\n- New price: [NEW PRICE]\n- Effective date: [DATE]\n- How much notice clients are getting: [TIMEFRAME]\n\nPlease give me:\n1. An email that explains the increase clearly in the first two sentences\n2. A brief, confident reason for the change, without over-apologizing\n3. What stays the same, to reassure clients about continuity\n4. How to handle a client who pushes back or asks for an exception\n5. Internal talking points for my team in case clients ask them questions directly\n\nMatch the tone to the size of the increase, a 5% bump reads differently than a 30% one.",
        "tip": "Customize it: Give the actual percentage increase, the tone should differ between a 5% bump and a 30% one."
      },
      {
        "number": "Prompt 59",
        "title": "Plan Content Around the Questions Clients Actually Ask",
        "prompt": "Act as a content strategist who turns real client questions into content. Here are the questions I get most often: [LIST 5-10, IDEALLY PULLED FROM REAL EMAILS OR DMS]. Also tell me:\n- Where I'd publish this content: [PLATFORM]\n- What I want this content to do beyond just answering the question: [GOAL]\n\nPlease give me:\n1. A content idea for each question: a post, email, or short video script\n2. The angle each piece should take so it also shows why working with me matters\n3. Which 3 questions are worth turning into bigger, standalone pieces of content\n4. A question I'm not being asked yet but probably should be answering anyway\n5. How to repurpose this content across more than one channel\n\nKeep the answers in plain language, the way I'd actually explain it to a client on a call.",
        "tip": "Customize it: Pull these from real client emails or DMs if you can, not just what you assume they ask."
      },
      {
        "number": "Prompt 60",
        "title": "Write a Referral Request That Doesn't Feel Awkward",
        "prompt": "Act as a client communication consultant who writes natural, non-transactional referral requests. Here's my context:\n- A recent result a client was genuinely happy with: [DESCRIBE]\n- How I'd normally bring this up if I weren't avoiding it: [DESCRIBE]\n- What I'd want from a referral, specifically: [E.G., an intro, a name, a post]\n\nPlease give me:\n1. A short written message I can send after a good result\n2. A spoken version I could say out loud on a call\n3. What makes this feel natural instead of transactional\n4. How to follow up if they don't respond, without sounding pushy\n5. What to say if they do refer someone, to close the loop and reinforce the behavior\n\nTime this around a real moment of satisfaction, not a random check-in.",
        "tip": "Customize it: Time this right after a result they were genuinely happy with, not on a random Tuesday."
      }
    ]
  },
  {
    "id": "04",
    "title": "Sales, Lead Gen & Follow-Up",
    "intro": "Most leads are lost in the follow-up, not the first call. These 20 prompts cover the scripts, sequences, and pipeline logic that keep leads moving without you personally chasing every single one.",
    "prompts": [
      {
        "number": "Prompt 61",
        "title": "Write the Discovery Call Script You Don't Have",
        "prompt": "Act as a sales consultant for solo service providers who currently wing their discovery calls. Here's my context:\n- What I sell: [SERVICE]\n- My current approach to discovery calls, even if it's \"no real structure\": [DESCRIBE]\n- What usually determines whether someone is a good fit: [DESCRIBE]\n\nPlease give me:\n1. An opening for the call that builds rapport without wasting time\n2. 5 questions that uncover whether someone is actually a good fit\n3. How to transition from discovery into talking about my offer without it feeling like a pitch\n4. How to close the call with clear next steps\n5. What to do if someone clearly isn't a fit, so I can end the call respectfully\n\nWrite this as a flexible guide, not a rigid script I'd sound robotic reading from.",
        "tip": "Customize it: Record yourself doing a real call, with permission, and compare it to the script. The gaps will be obvious."
      },
      {
        "number": "Prompt 62",
        "title": "Build the Follow-Up Sequence for Leads Who Went Quiet",
        "prompt": "Act as a sales follow-up strategist using GoHighLevel. Here's my context:\n- How the original call actually went: [DESCRIBE THE RAPPORT AND WHAT WAS DISCUSSED]\n- How long they've been quiet: [TIMEFRAME]\n- What I'm hoping to learn or accomplish with this follow-up: [GOAL]\n\nPlease give me:\n1. A 4-touch follow-up sequence spread over 2 weeks\n2. The exact message for each touch\n3. How the tone should shift as the sequence progresses, from warm to more direct\n4. What to do if they respond partway through, even with a non-committal answer\n5. The point at which I should stop following up and move them to a long-term nurture list instead\n\nKeep this matched to how genuinely good the original call was, don't oversell a lukewarm conversation.",
        "tip": "Customize it: Be specific about how the original call actually went, the sequence's tone depends on the real rapport built."
      },
      {
        "number": "Prompt 63",
        "title": "Handle the Objection You Hear Most",
        "prompt": "Act as a sales coach who helps service providers respond to objections without sounding scripted. Here's the objection, quoted as people actually say it: [QUOTE THE OBJECTION]. Also tell me:\n- What I usually say in response right now: [DESCRIBE]\n- What I think the real concern underneath it is: [DESCRIBE, IF YOU HAVE A GUESS]\n\nPlease give me:\n1. 3 different ways to respond to this objection\n2. The real concern each response is actually addressing\n3. A version that asks a question back instead of immediately defending\n4. What not to say, even if it feels like the obvious response\n5. How to know if my response actually landed versus just ended the conversation\n\nKeep these conversational, something I'd actually say out loud, not a rehearsed rebuttal.",
        "tip": "Customize it: Quote the objection word for word if you can, the real phrasing matters more than a paraphrase."
      },
      {
        "number": "Prompt 64",
        "title": "Write a Proposal That Doesn't Take You Three Hours",
        "prompt": "Act as a proposal writing consultant for service businesses. Here's the client and the situation: [DESCRIBE THE CLIENT, THEIR PROBLEM, AND WHAT I'M PROPOSING]. Also tell me:\n- My typical proposal turnaround time right now: [ESTIMATE]\n- What clients usually ask follow-up questions about after receiving a proposal: [DESCRIBE]\n\nPlease give me:\n1. A reusable proposal structure with clearly labeled sections\n2. This specific proposal written out using that structure\n3. A section addressing the questions clients usually ask, before they have to ask them\n4. What should always be customized versus what can stay templated\n5. A way to track which proposals convert, so I can improve the template over time\n\nBuild the structure first, then fill in this specific example, so I have both a template and a finished proposal.",
        "tip": "Customize it: Build the reusable structure once, then you're only filling in specifics for every proposal after this."
      },
      {
        "number": "Prompt 65",
        "title": "Design Your Lead Scoring System in GoHighLevel",
        "prompt": "Act as a CRM strategist who builds lead scoring systems inside GoHighLevel for small businesses. Here's my context:\n- Where my leads come from: [SOURCES]\n- My real lead volume per month: [NUMBER]\n- What currently makes a lead feel \"hot\" to me, even informally: [DESCRIBE]\n\nPlease give me:\n1. A simple lead scoring system based on actions or info that indicate readiness\n2. What separates a \"hot\" lead from a \"not yet ready\" one in my specific business\n3. How scoring should change what automation or follow-up a lead receives\n4. The fields or tags I'd need to set up in GoHighLevel to track this\n5. How often I should review and adjust the scoring criteria\n\nKeep this simple enough to actually maintain given my real lead volume, not an enterprise scoring model.",
        "tip": "Customize it: Mention your actual lead volume, scoring rules look different at 10 leads a month versus 100."
      },
      {
        "number": "Prompt 66",
        "title": "Write the Email for When a Prospect Chose a Competitor",
        "prompt": "Act as a sales communication consultant. Here's the situation: a prospect just told me they're going with someone else. Tell me:\n- What they said, if you have specifics: [DESCRIBE]\n- How the rest of the sales process went before this: [DESCRIBE]\n\nPlease give me:\n1. A gracious response that keeps the door open without sounding desperate\n2. A question I could include to learn why I actually lost this one\n3. What to do if they don't respond to that question\n4. A note to myself on what this loss might reveal about my process\n5. How long to wait before reaching back out, if ever, and what that message would say\n\nSend this within 24 hours, write it so it still feels timely and natural at that speed.",
        "tip": "Customize it: Send this within 24 hours while it's still natural, not weeks later when it reads as an afterthought."
      },
      {
        "number": "Prompt 67",
        "title": "Build a Win-Back Sequence for Past Leads",
        "prompt": "Act as a re-engagement strategist using GoHighLevel. Here's my context:\n- How long ago these leads went cold: [TIMEFRAME]\n- What I was offering them at the time versus now: [DESCRIBE IF DIFFERENT]\n- Why I think they didn't convert originally, if I have a guess: [DESCRIBE]\n\nPlease give me:\n1. A 3-email win-back sequence\n2. How each email acknowledges the time gap honestly\n3. A clear, low-pressure reason for them to reconnect\n4. What's different now that might change their answer\n5. What to do with anyone who doesn't respond to any of the 3 emails\n\nMatch the tone to the actual time gap, a lead from 3 months ago needs a different approach than one from 2 years ago.",
        "tip": "Customize it: Be honest about the time gap, a 3-month-old lead and a 2-year-old lead need very different tones."
      },
      {
        "number": "Prompt 68",
        "title": "Write Your Pricing Page So People Don't Need to Ask",
        "prompt": "Act as a pricing communication consultant for service businesses. Here's my context:\n- What I offer and the price or range: [SERVICE AND PRICE]\n- The pricing questions people usually ask before booking a call: [LIST]\n- Why I haven't put pricing on my page before, if applicable: [DESCRIBE]\n\nPlease give me:\n1. A pricing section that answers the most common questions upfront\n2. How to present the price so it feels like an investment, not a number on a menu\n3. What to include about what's included versus not included\n4. How to handle pricing that varies by project without looking vague\n5. A line that moves someone from reading the price to booking a call\n\nKeep this honest and specific, vague pricing pages create more friction than clarity.",
        "tip": "Customize it: List your actual most-asked pricing questions, the page should answer those specifically."
      },
      {
        "number": "Prompt 69",
        "title": "Plan the Sales Pipeline Stages in GoHighLevel",
        "prompt": "Act as a sales operations consultant who sets up pipelines in GoHighLevel. Here's my context:\n- The type of sales process I run: [DESCRIBE]\n- My real stage count right now, even if it's messy: [DESCRIBE]\n- Where deals typically get stuck: [STAGE]\n\nPlease give me:\n1. A clean set of pipeline stage names, ideally no more than 6 or 7\n2. What moves a lead from one stage to the next\n3. Which stages should trigger an automated action, like a tag, email, or task\n4. How to handle deals that stall at the stage I mentioned\n5. A weekly report I could pull from this pipeline to spot problems early\n\nKeep the stages specific to how my sales process actually works, not a generic CRM template.",
        "tip": "Customize it: Name your real stage count, more than 6-7 stages usually means some should be merged."
      },
      {
        "number": "Prompt 70",
        "title": "Write the No-Show Recovery Message",
        "prompt": "Act as a sales follow-up strategist. Here's the situation: someone booked a call and didn't show up. Tell me:\n- How often this happens: [FREQUENCY]\n- What I currently do about it, if anything: [DESCRIBE]\n\nPlease give me:\n1. The message I send the same day, right after the no-show\n2. A separate message for if they don't respond within 48 hours\n3. How both messages avoid guilt-tripping while still being direct\n4. What I should offer to make rebooking easy\n5. What to do if this is the second time the same person has no-showed\n\nSend the first message before you're tempted to feel annoyed, the tone holds up better that way.",
        "tip": "Customize it: Send the same-day message before you're tempted to feel annoyed, the tone holds up better that way."
      },
      {
        "number": "Prompt 71",
        "title": "Turn a Past Client Into a Repeat Buyer",
        "prompt": "Act as a client retention strategist. Here's the situation: [DESCRIBE WHAT THEY BOUGHT AND HOW LONG AGO]. Also tell me:\n- Why they haven't come back, if I have a guess: [DESCRIBE]\n- What I could offer them now that might be relevant: [DESCRIBE]\n\nPlease give me:\n1. A message that re-opens the conversation as a genuine check-in, not a pitch\n2. A specific reference to what they originally bought, so it doesn't feel generic\n3. Where in the message, if at all, to mention what's new or available now\n4. What to do if they respond but aren't ready to buy again\n5. How to keep this relationship warm even if this particular message doesn't convert\n\nLead with curiosity about them, not your calendar, the rebooking ask should feel secondary.",
        "tip": "Customize it: Mention what they originally bought, the reconnection should reference something specific."
      },
      {
        "number": "Prompt 72",
        "title": "Build the Qualifying Questions for Your Application Form",
        "prompt": "Act as a sales qualification consultant. Here's my context:\n- What kind of leads I want to filter out: [DESCRIBE]\n- My actual dealbreakers, decided in advance: [LIST]\n- What information I currently have no way of getting before a call: [DESCRIBE]\n\nPlease give me:\n1. 6 application questions that filter for fit before a call happens\n2. The logic for which answers should auto-disqualify someone\n3. Which answers should flag someone for a closer look instead of an automatic yes or no\n4. How to phrase questions so people answer honestly instead of telling me what I want to hear\n5. What to do with someone who skips a question entirely\n\nKeep the form short enough that good-fit leads won't abandon it halfway through.",
        "tip": "Customize it: Decide your real dealbreakers before writing the form, vague disqualifiers don't filter anything."
      },
      {
        "number": "Prompt 73",
        "title": "Write the Upsell Conversation for an Existing Client",
        "prompt": "Act as a sales strategist for service businesses. Here's my context:\n- What they currently buy: [CURRENT SERVICE]\n- What else could genuinely benefit them: [ADDITIONAL SERVICE]\n- A result they've already mentioned wanting, even informally: [DESCRIBE]\n\nPlease give me:\n1. How I'd bring this up, framed around their goal, not my revenue\n2. The exact wording I'd use to introduce the idea\n3. How to handle it if they say it's not the right time\n4. A way to plant the idea now even if they're not ready to buy yet\n5. What evidence or example I could use to make the case concrete\n\nKeep the framing entirely about their result, mentioning revenue or upselling explicitly would undercut the message.",
        "tip": "Customize it: Frame the additional service around a result they've already mentioned wanting."
      },
      {
        "number": "Prompt 74",
        "title": "Plan Your Cold Outreach Without Sounding Like Spam",
        "prompt": "Act as a cold outreach strategist. Here's my context:\n- Who I want to reach: [TYPE OF PROSPECT]\n- Something specific I could reference about them, not a generic detail: [DESCRIBE]\n- What I'm hoping happens after this message: [GOAL]\n\nPlease give me:\n1. 3 versions of a first message, each under 75 words\n2. Each one leading with something specific to the recipient, not a generic pitch\n3. A soft call to action that doesn't ask for too much too soon\n4. What makes each version different in approach, so I can actually test them\n5. How to follow up if I get no response after the first message\n\nWrite these so they read like a real person reached out, not a templated sequence.",
        "tip": "Customize it: Send these as actual tests to 5 people each before scaling up, see which one gets real replies."
      },
      {
        "number": "Prompt 75",
        "title": "Write the Script for Handling Price Pushback",
        "prompt": "Act as a sales coach for solo service providers. Here's my context:\n- What I quote for this service: [PRICE] for [SERVICE]\n- What pushback usually sounds like: [DESCRIBE, OR PASTE AN EXAMPLE]\n- What I tend to do when this happens, be honest: [DESCRIBE]\n\nPlease give me:\n1. 3 ways to respond that hold the price with confidence\n2. What to say if they ask for a discount directly\n3. How to respond to silence after quoting the price, without filling it nervously\n4. When, if ever, it makes sense to actually adjust the price or scope instead of holding firm\n5. How to know the difference between genuine pushback and a real budget mismatch\n\nKeep the tone calm and matter-of-fact, defensiveness usually makes pushback worse, not better.",
        "tip": "Customize it: Practice saying the response out loud once, scripts that read well don't always say well."
      },
      {
        "number": "Prompt 76",
        "title": "Build the Referral Partner Outreach Message",
        "prompt": "Act as a partnership strategist. Here's my context:\n- Who serves the same audience as me without being a competitor: [TYPE OF BUSINESS/PERSON]\n- What I could offer them in return: [DESCRIBE]\n- What I'd want to propose if they respond: [DESCRIBE]\n\nPlease give me:\n1. A first outreach message that's clearly not a cold sales pitch\n2. What I should propose on a call if they respond\n3. How to make the arrangement feel mutual instead of one-sided\n4. What to do if they're interested but slow to follow through\n5. How to track whether this partnership is actually generating referrals over time\n\nPick a partner whose audience genuinely needs you, this approach falls flat as a purely transactional ask.",
        "tip": "Customize it: Pick a partner whose audience genuinely needs you, this falls flat as a transactional ask."
      },
      {
        "number": "Prompt 77",
        "title": "Write the Sales Email Sequence for a Limited-Time Offer",
        "prompt": "Act as an email marketing strategist using GoHighLevel. Here's my context:\n- What I'm offering and the real deadline: [PRODUCT/SERVICE], [START DATE] to [END DATE]\n- Why this deadline is genuinely real, not manufactured: [DESCRIBE]\n- What I want people to do at each stage of the sequence: [DESCRIBE]\n\nPlease give me:\n1. A 5-email sequence covering the announcement, value reminders, and the final-hours push\n2. Subject lines for each email\n3. How urgency should build across the sequence without resorting to fake scarcity\n4. What the final email should say differently than the rest\n5. What to send to anyone who didn't buy once the deadline passes\n\nBe honest with yourself about whether the deadline is real, fake urgency erodes trust fast and clients notice.",
        "tip": "Customize it: Be honest with yourself about whether the deadline is real, fake urgency erodes trust fast."
      },
      {
        "number": "Prompt 78",
        "title": "Diagnose Why Your Close Rate Is Lower Than It Should Be",
        "prompt": "Act as a sales process auditor. Here's my process, walked through step by step: [WALK THROUGH FROM FIRST CONTACT TO CLOSED DEAL]. Also tell me:\n- My last 5 lost deals, with whatever detail you remember: [DESCRIBE]\n- Where I suspect the problem is, even if you're not sure: [DESCRIBE]\n\nPlease give me:\n1. The most likely stage where I'm losing people, based on the pattern in my lost deals\n2. What's probably causing the drop-off at that stage\n3. One specific change to test first, before changing anything else\n4. A way to measure whether that change actually improves the close rate\n5. What to leave alone for now, even if it's tempting to fix everything at once\n\nBe direct with me even if the likely answer points to something in how I run the process personally.",
        "tip": "Customize it: Walk through your last 5 lost deals specifically, the pattern usually shows up by the third one."
      },
      {
        "number": "Prompt 79",
        "title": "Write the Re-Booking Message for a Lapsed Client",
        "prompt": "Act as a client communication strategist. Here's the situation: a client who used to book regularly hasn't in [TIMEFRAME]. Also tell me:\n- What changed, if I know: [DESCRIBE]\n- What I'd want to offer if rebooking comes up naturally: [DESCRIBE]\n\nPlease give me:\n1. A message that checks in genuinely, with no mention of booking in the opening lines\n2. Where, if anywhere, rebooking should be mentioned, and how casually\n3. What to do if they respond but don't bring up working together again\n4. A follow-up plan if they don't respond at all\n5. How to read whether the relationship is actually over versus just dormant\n\nLead with curiosity about them, not your calendar, the rebooking ask should feel secondary, not the point.",
        "tip": "Customize it: Lead with curiosity about them, not your calendar, the rebooking ask should feel secondary."
      },
      {
        "number": "Prompt 80",
        "title": "Build the Sales Call Follow-Up Email Template",
        "prompt": "Act as a sales communication consultant. Here's my context:\n- What a good discovery call covers for me, generally: [DESCRIBE]\n- What \"next steps\" usually look like after a good call: [DESCRIBE]\n\nPlease give me:\n1. A reusable follow-up template with placeholders for call-specific details\n2. A recap section that shows I was actually listening, not generic\n3. Clear next steps spelled out, with a deadline attached\n4. What to include if the next step is them, not me, taking action\n5. How soon after the call this should go out to land while the conversation is still fresh\n\nBuild the placeholders so filling this in takes me under 5 minutes per call.",
        "tip": "Customize it: Send this within an hour of the call ending while the conversation is still fresh for both of you."
      }
    ]
  },
  {
    "id": "05",
    "title": "Client Experience & Retention",
    "intro": "Keeping a client is cheaper than finding a new one, and most of retention comes down to a handful of moments handled well. These 20 prompts cover onboarding, check-ins, hard conversations, and the small touches that make people stay.",
    "prompts": [
      {
        "number": "Prompt 81",
        "title": "Design the First Email a New Client Gets",
        "prompt": "Act as a client experience designer. Here's the situation: someone just signed with me for [SERVICE]. Also tell me:\n- What happens immediately after signing, logistically: [DESCRIBE]\n- What I need from them to get started: [DESCRIBE]\n\nPlease give me:\n1. A welcome email that goes out within an hour of signing\n2. What happens next, laid out clearly\n3. What I need from them and by when\n4. A line that genuinely conveys how excited I am to work with them, not a generic platitude\n5. What should come right after this email, so the momentum doesn't drop\n\nSend this the moment the contract is signed, the excitement matters more in the first hour than the first day.",
        "tip": "Customize it: Send this the moment the contract is signed, the excitement matters more in the first hour than the first day."
      },
      {
        "number": "Prompt 82",
        "title": "Build the Client Onboarding Checklist",
        "prompt": "Act as an onboarding systems consultant. Here's everything that needs to happen between a client signing and their first deliverable, even if it's inconsistent right now: [LIST]. Also tell me:\n- Who's currently involved: [ME, VA, CLIENT]\n- What's gone wrong in past onboarding, if anything: [DESCRIBE]\n\nPlease give me:\n1. A checklist of every step from signing to first deliverable\n2. A clear owner for each step: me, a VA, or the client\n3. What should be automated versus done manually\n4. A step that specifically addresses what's gone wrong before\n5. How long this entire process should realistically take from start to finish\n\nList every step exactly as it happens now, even the inconsistent ones, that's what needs fixing first.",
        "tip": "Customize it: List every step exactly as it happens now, even the inconsistent ones, that's what needs fixing first."
      },
      {
        "number": "Prompt 83",
        "title": "Write the Check-In Message for the Midpoint of a Project",
        "prompt": "Act as a client communication consultant. Here's the project: [DESCRIBE THE PROJECT AND WHERE IT STANDS]. Also tell me:\n- How things seem to be going so far, honestly: [DESCRIBE]\n\nPlease give me:\n1. A midpoint check-in message\n2. A question that surfaces concerns before they become complaints\n3. How to phrase this so it doesn't sound like I'm fishing for a compliment\n4. What to do if they raise a concern I wasn't expecting\n5. How this message should differ if the project is going well versus if it's shaky\n\nSend this even when things are going fine, waiting for a problem to check in is too late.",
        "tip": "Customize it: Send this even when things are going fine, waiting for a problem to check in is too late."
      },
      {
        "number": "Prompt 84",
        "title": "Design Your Client Feedback Survey",
        "prompt": "Act as a client experience researcher. Here's my context:\n- What I want feedback on: [PROJECT/SERVICE COMPLETION]\n- Why past feedback attempts have felt too polite or vague, if applicable: [DESCRIBE]\n\nPlease give me:\n1. A short survey, 5 questions max\n2. Questions designed to get past polite, surface-level answers\n3. How to introduce the survey so people actually respond\n4. What to do with a response that's vague or unhelpful\n5. How often I should be sending this, given my client volume\n\nKeep it under 5 questions, response rates drop fast past that.",
        "tip": "Customize it: Keep it under 5 questions, response rates drop fast past that."
      },
      {
        "number": "Prompt 85",
        "title": "Write the Offboarding Message for a Finished Engagement",
        "prompt": "Act as a client experience consultant. Here's the situation: a client's engagement with me is wrapping up. Also tell me:\n- How the engagement went overall, honestly: [DESCRIBE]\n- What I'd want to happen next, if anything: [REFERRAL, FUTURE WORK, NOTHING]\n\nPlease give me:\n1. An offboarding message that thanks them specifically, not generically\n2. A summary of what was delivered over the engagement\n3. How to open the door to future work or a referral without being pushy\n4. How this message should change if the engagement didn't go perfectly\n5. What internal note I should keep about this client for future reference\n\nSend this even for projects that didn't go perfectly, the message just needs to be honest, not glowing.",
        "tip": "Customize it: Send this even for projects that didn't go perfectly, the message just needs to be honest, not glowing."
      },
      {
        "number": "Prompt 86",
        "title": "Handle a Client Complaint Without Getting Defensive",
        "prompt": "Act as a client relations coach. Here's the complaint, as they actually said it: [DESCRIBE WHAT THEY SAID]. Also tell me:\n- What part of this is fair, even if it's hard to admit: [DESCRIBE]\n- What actually happened from my side: [DESCRIBE]\n\nPlease give me:\n1. A response that acknowledges what's valid in their complaint\n2. How to address the issue directly without over-explaining or making excuses\n3. A proposed fix, specific and actionable\n4. A tone check, calm and accountable, not defensive or over-apologetic\n5. What I should do internally afterward so this doesn't happen again\n\nRespond within 24 hours even without a fix yet, silence reads worse than an honest \"still working on it.\"",
        "tip": "Customize it: Respond within 24 hours even without a fix yet, silence reads worse than an honest \"still working on it.\""
      },
      {
        "number": "Prompt 87",
        "title": "Write the Email That Sets Expectations Before You've Started",
        "prompt": "Act as a client communication strategist. Here's my context:\n- Communication expectations I want to set: [TURNAROUND TIME, CHANNELS, AVAILABILITY]\n- What's in scope versus out of scope for this engagement: [DESCRIBE]\n- A misunderstanding from a past client that this should prevent: [DESCRIBE, IF APPLICABLE]\n\nPlease give me:\n1. A friendly but clear email setting expectations before kickoff\n2. How communication will work day to day\n3. What's included versus what would require a separate conversation\n4. A line that prevents the past misunderstanding I described from happening again\n5. What tone to strike so this reads as helpful, not like a legal disclaimer\n\nSend this before the first deliverable, not after the first miscommunication.",
        "tip": "Customize it: Send this before the first deliverable, not after the first miscommunication."
      },
      {
        "number": "Prompt 88",
        "title": "Design a Simple Client Loyalty or Referral Program",
        "prompt": "Act as a client retention strategist for service businesses. Here's my context:\n- What I want to reward: long-term clients, referrals, or both: [SPECIFY]\n- What I'm willing to offer, even informally: [DESCRIBE]\n- Why a corporate points system wouldn't fit my brand: [DESCRIBE OR SKIP]\n\nPlease give me:\n1. 3 simple ways to reward referrals or loyalty without a complicated points system\n2. The message that introduces whichever option fits best\n3. How to track this without needing new software\n4. What to do when someone qualifies, so the reward actually gets delivered\n5. How to keep this feeling genuine instead of transactional over time\n\nKeep it simple enough to explain in one sentence, complicated loyalty programs don't get used.",
        "tip": "Customize it: Keep it simple enough to explain in one sentence, complicated loyalty programs don't get used."
      },
      {
        "number": "Prompt 89",
        "title": "Write the Apology Email for a Mistake You Made",
        "prompt": "Act as a client relations consultant. Here's what went wrong: [DESCRIBE THE MISTAKE]. Also tell me:\n- The fix, if I already know it: [DESCRIBE]\n- How significant this mistake actually was to the client: [DESCRIBE]\n\nPlease give me:\n1. An apology email that owns the mistake in the first sentence\n2. An explanation of the fix without over-explaining how it happened\n3. What to offer, if anything, to rebuild trust\n4. How to avoid sounding like I'm groveling while still being genuinely accountable\n5. What I should track internally so this specific mistake doesn't repeat\n\nOwn the mistake in the first sentence, burying the apology in paragraph two undercuts it.",
        "tip": "Customize it: Own the mistake in the first sentence, burying the apology in paragraph two undercuts it."
      },
      {
        "number": "Prompt 90",
        "title": "Plan the Anniversary Touchpoint for Long-Term Clients",
        "prompt": "Act as a client experience designer. Here's my context:\n- How long my longest clients have been with me: [TIMEFRAME]\n- What I currently do to acknowledge milestones, if anything: [DESCRIBE]\n\nPlease give me:\n1. A simple way to acknowledge a client's work anniversary with me\n2. How to make this feel genuine even if part of the process is automated\n3. What to include that's specific to that client, not generic\n4. A version of this for a client at the 1-year mark versus the 3-year mark\n5. What this touchpoint should lead to, if anything, beyond just appreciation\n\nNote the actual start date if you have it, a specific milestone lands better than a vague \"thanks for being with us.\"",
        "tip": "Customize it: Note the actual start date if you have it, a specific milestone lands better than a vague \"thanks.\""
      },
      {
        "number": "Prompt 91",
        "title": "Write the Testimonial Request That Gets a Real Answer",
        "prompt": "Act as a client communication consultant. Here's my context:\n- A recent result worth asking about: [DESCRIBE]\n- What's wrong with the testimonials I usually get back, if anything: [DESCRIBE, e.g., too vague, too short]\n\nPlease give me:\n1. A testimonial request with specific questions instead of an open-ended ask\n2. Why these specific questions get more usable answers\n3. What to do if they answer briefly anyway\n4. How to ask for permission to use their name or business alongside the testimonial\n5. Where I should send this from, email versus a quick call, depending on the client\n\nAsk within a week of the result, not months later when the details have faded.",
        "tip": "Customize it: Ask within a week of the result, not months later when the details have faded."
      },
      {
        "number": "Prompt 92",
        "title": "Build the \"Are We Still a Good Fit?\" Check-In",
        "prompt": "Act as a client retention strategist. Here's my context:\n- A long-term client relationship I'd want to check in on: [DESCRIBE]\n- What I'm genuinely unsure about in this relationship, if anything: [DESCRIBE]\n\nPlease give me:\n1. A check-in message that asks honestly whether the relationship is still working for them\n2. Follow-up questions to use if they hesitate or give a vague answer\n3. How to receive an honest \"this isn't working anymore\" without getting defensive\n4. What to do if they say things are great but something in their behavior suggests otherwise\n5. How often this kind of check-in should happen with long-term clients\n\nAsk this even with clients who seem happy, the ones who hesitate are the ones worth hearing from.",
        "tip": "Customize it: Ask this even with clients who seem happy, the ones who hesitate are the ones worth hearing from."
      },
      {
        "number": "Prompt 93",
        "title": "Write the Scope Creep Conversation Without Sounding Petty",
        "prompt": "Act as a client boundaries consultant. Here's the situation: a client keeps asking for things outside of what we agreed on. Specific examples: [DESCRIBE EXAMPLES]. Also tell me:\n- What's actually in our agreed scope: [DESCRIBE]\n- Why I haven't brought this up yet: [DESCRIBE]\n\nPlease give me:\n1. How to bring this up, acknowledging their request without immediately saying no\n2. Clear language distinguishing what's in scope from what isn't\n3. What to propose for handling the out-of-scope request, like a separate project or fee\n4. How to prevent this from feeling like a confrontation\n5. What to put in future agreements to prevent this exact pattern\n\nBring the actual examples of the scope creep, vague descriptions won't produce a useful script.",
        "tip": "Customize it: Bring the actual examples of the scope creep, vague \"sometimes they ask for extra stuff\" won't help."
      },
      {
        "number": "Prompt 94",
        "title": "Design the Client Experience Map From First Contact to Year One",
        "prompt": "Act as a client experience consultant. Here's my context:\n- Every touchpoint I can think of from first contact through year one, even roughly: [LIST]\n- Which of these currently exist versus which are missing: [DESCRIBE]\n\nPlease give me:\n1. A complete map of every touchpoint from first conversation through year one\n2. For each one, whether it currently exists or is missing\n3. What's missing that would make the experience feel more intentional\n4. The 3 highest-impact gaps to fix first\n5. A rough timeline for closing those gaps over the next 90 days\n\nBe honest about which touchpoints don't exist yet, that's more useful than describing the ones that already work.",
        "tip": "Customize it: Be honest about which touchpoints don't exist yet, that's more useful than describing the ones that work."
      },
      {
        "number": "Prompt 95",
        "title": "Write the Message for When You Need to Raise a Client's Rate",
        "prompt": "Act as a client communication strategist. Here's my context:\n- Old rate and new rate: [OLD RATE] to [NEW RATE]\n- How long this client has been with me: [TIMEFRAME]\n- How much notice I'm planning to give: [TIMEFRAME, AT LEAST 30 DAYS]\n\nPlease give me:\n1. A message announcing the increase that's warm but not apologetic about the decision\n2. A brief, confident reason for the change\n3. What stays the same, to reassure them about continuity\n4. How to handle it if they push back given how long they've been a client\n5. What I should be prepared to offer, if anything, to keep them if they hesitate\n\nGive real notice, at least 30 days, regardless of what the message says, timing matters as much as wording.",
        "tip": "Customize it: Give real notice, at least 30 days, regardless of what the message says, timing matters as much as wording."
      },
      {
        "number": "Prompt 96",
        "title": "Build the \"What Happens If You Cancel\" Process",
        "prompt": "Act as an operations consultant. Here's what currently happens when a client wants to cancel or pause, even if it's \"nothing formal\": [DESCRIBE]. Also tell me:\n- My actual refund or pause policy, if I have one: [DESCRIBE]\n- What's happened in past cancellations that I'd want to handle differently: [DESCRIBE]\n\nPlease give me:\n1. A clear, fair process for handling cancellation or pause requests\n2. The message that goes out to the client\n3. The internal steps that follow, like updating records or stopping billing\n4. How to handle a request that falls outside the standard policy\n5. How this policy should be communicated upfront, before anyone needs to use it\n\nDecide your actual refund or pause policy before writing the message, the process needs a real answer to lean on.",
        "tip": "Customize it: Decide your actual refund or pause policy before writing the message, the process needs a real answer to lean on."
      },
      {
        "number": "Prompt 97",
        "title": "Write the Client Update Format You'll Actually Stick To",
        "prompt": "Act as a client communication consultant. Here's my context:\n- How often I want to send updates: [WEEK/MONTH]\n- Why I'm inconsistent about it right now: [DESCRIBE]\n- What clients actually want to know, versus what I think they want to know: [DESCRIBE]\n\nPlease give me:\n1. A simple, short update format, not a long report\n2. What sections it should include, kept to the essentials\n3. How long this should realistically take me to fill out each time\n4. A version I could send even on a genuinely busy week\n5. What to do if there's truly nothing new to report\n\nPick a format short enough that you'd actually send it on a Friday at 4pm, that's the real test.",
        "tip": "Customize it: Pick a format short enough that you'd actually send it on a Friday at 4pm, that's the real test."
      },
      {
        "number": "Prompt 98",
        "title": "Plan the Re-Engagement for a Client Who's Gone Quiet",
        "prompt": "Act as a client relations strategist. Here's the situation: a client used to be responsive and now isn't replying about [DESCRIBE WHAT YOU'VE BEEN WAITING ON]. Also tell me:\n- How long they've been quiet: [TIMEFRAME]\n- What I need from them to move forward: [DESCRIBE]\n\nPlease give me:\n1. A message that checks in without guilt-tripping them\n2. How to frame the ask so it doesn't feel like a reminder of their silence\n3. A backup plan if they still don't respond\n4. When to escalate this to a phone call or a different channel\n5. What this pattern might mean about the relationship if it keeps happening\n\nWait for a reasonable silence window, a week, not a day, before sending this.",
        "tip": "Customize it: Wait for a reasonable silence window, a week, not a day, before sending this."
      },
      {
        "number": "Prompt 99",
        "title": "Write the \"Year in Review\" Recap for a Long-Term Client",
        "prompt": "Act as a client reporting consultant. Here's what we accomplished together this year, as much detail as I have: [DESCRIBE WINS, NUMBERS, MILESTONES]. Also tell me:\n- What's planned or being discussed for next year, if anything: [DESCRIBE]\n\nPlease give me:\n1. A structure covering wins, numbers where relevant, and what's next\n2. A full draft based on what I've described\n3. How to make this feel personal to this specific client, not a template\n4. Where to mention what's coming next without it feeling like a sales pitch\n5. A closing line that reinforces the relationship, not just the results\n\nPull actual numbers or milestones from the year, specifics make this land, vague praise doesn't.",
        "tip": "Customize it: Pull actual numbers or milestones from the year, specifics make this land, vague praise doesn't."
      },
      {
        "number": "Prompt 100",
        "title": "Design Your Client Experience Audit",
        "prompt": "Act as a client experience auditor. Here's my context:\n- My business and the type of client experience I deliver: [DESCRIBE]\n- The last time I looked at my own client experience from their perspective, if ever: [DESCRIBE]\n\nPlease give me:\n1. 8 questions to ask myself about every touchpoint in my client experience\n2. How to answer these honestly, from the client's perspective, not my own\n3. Based on common answers to these questions, the 3 highest-impact changes most businesses like mine need to make\n4. How to turn my own answers into a prioritized action list\n5. How often I should run this audit going forward\n\nDo this audit once a quarter, not just once, client experience erodes quietly if nobody's checking.",
        "tip": "Customize it: Do this audit once a quarter, not just once, client experience erodes quietly if nobody's checking."
      }
    ]
  }
];
