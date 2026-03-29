import { StudyFile } from "../types";

export const sampleStudyFile: StudyFile = {
  title: "Normal Labour & Delivery",
  subtitle: "OB/GYN — 4th Year Clinical Lecture",
  topic: "Obstetrics",
  tags: [
    { label: "Obstetrics", color: "rose", crossLinks: ["Preterm Labour", "Prolonged Labour", "Fetal Monitoring"] },
    { label: "Labour", color: "pink", crossLinks: ["Bishop Score", "Oxytocin Use", "CTG Interpretation"] },
    { label: "Delivery", color: "purple", crossLinks: ["Third Stage", "PPH", "Episiotomy"] },
    { label: "High-Yield ⭐", color: "amber", crossLinks: ["EXAM QUESTIONS", "Department Head Topics"] },
  ],
  notes: [
    {
      type: "heading1",
      content: "Definition of Normal Labour",
    },
    {
      type: "text",
      content:
        "Labour is defined as the process by which the products of conception are expelled from the uterus after the 28th week of gestation.",
    },
    {
      type: "bullet",
      content: "Normal (Eutocia): Spontaneous onset, vertex presentation, single fetus, delivers within 18 hours",
    },
    {
      type: "bullet",
      content: "Abnormal (Dystocia): Any deviation from the above — requires intervention",
    },
    {
      type: "exam",
      content:
        "⭐ EXAM — The upper limit for normal labour duration is 18 hours. Beyond this = prolonged labour. This was asked in the last 3 department exams.",
      isExam: true,
    },
    {
      type: "doctor",
      content:
        "📢 Doctor's Explanation — The professor emphasized: 'Do NOT confuse eutocia with eutocic delivery. Eutocia = the process is normal. You will see MCQs that try to trick you with this. Always read the question twice.'",
    },

    {
      type: "heading1",
      content: "Signs of True Labour (vs. False Labour)",
    },
    {
      type: "table",
      content: "True Labour vs. False Labour",
      tableData: {
        headers: ["Feature", "True Labour", "False Labour (Braxton Hicks)"],
        rows: [
          ["Contractions", "Regular, increasing frequency & intensity", "Irregular, do not increase"],
          ["Pain location", "Starts in back → radiates to front", "Abdomen only"],
          ["Cervical change", "Progressive dilation & effacement", "No change"],
          ["Effect of walking", "Increases contraction intensity", "No effect or decreases"],
          ["Show", "Present (bloody mucus)", "Usually absent"],
          ["Fetal descent", "Progressive", "None"],
        ],
      },
    },
    {
      type: "doctor",
      content:
        "📢 Doctor's Explanation — 'The most reliable sign of true labour is progressive cervical dilatation — not contractions. Any registrar who sends a patient home because contractions were irregular, but didn't check the cervix, has made a clinical error.'",
    },
    {
      type: "exam",
      content:
        "⭐ EXAM — The most reliable sign of true labour = progressive cervical dilation. This was specifically highlighted as a common MCQ trap.",
      isExam: true,
    },

    {
      type: "heading1",
      content: "Stages of Labour",
    },
    {
      type: "heading2",
      content: "First Stage — Cervical Dilation",
    },
    {
      type: "text",
      content:
        "Extends from onset of true labour to full cervical dilation (10 cm). Divided into two phases:",
    },
    {
      type: "numbered",
      content: "Latent Phase: 0 → 3 cm. Slow progress. Duration: up to 8 hours (primigravida) / 4 hours (multigravida)",
    },
    {
      type: "numbered",
      content: "Active Phase: 3 → 10 cm. Rate: ≥1 cm/hour. Friedman curve applies.",
    },
    {
      type: "exam",
      content:
        "⭐ EXAM — Active phase rate = minimum 1 cm/hour. Below this = active phase arrest → needs assessment for CPD or augmentation. The department head is very fond of this number.",
      isExam: true,
    },
    {
      type: "doctor",
      content:
        "📢 Doctor's Explanation — 'Friedman curve: Think of it as a hockey stick. Flat at the bottom (latent) then shoots up steeply (active). If a patient's progress is not following this shape, something is wrong. Draw it in your head every time you assess a labouring patient.'",
    },
    {
      type: "heading2",
      content: "Second Stage — Expulsion",
    },
    {
      type: "text",
      content: "From full dilation (10 cm) to delivery of the baby.",
    },
    {
      type: "bullet",
      content: "Primigravida: up to 2 hours (or 3 hours with epidural)",
    },
    {
      type: "bullet",
      content: "Multigravida: up to 1 hour (or 2 hours with epidural)",
    },
    {
      type: "exam",
      content:
        "⭐ EXAM — Second stage limits: Primi = 2h / Multi = 1h. Add 1 hour if epidural is present. This comes as an OSCE station and written MCQ.",
      isExam: true,
    },
    {
      type: "heading2",
      content: "Third Stage — Placental Delivery",
    },
    {
      type: "text",
      content: "From delivery of baby to delivery of placenta. Normal duration = up to 30 minutes.",
    },
    {
      type: "bullet",
      content: "Signs of placental separation: Calkin's sign (uterus becomes globular), cord lengthening, gush of blood, uterus rises",
    },
    {
      type: "warning",
      content:
        "⚠️ WARNING — Never apply cord traction before signs of placental separation — risk of uterine inversion (life-threatening emergency).",
    },
    {
      type: "doctor",
      content:
        "📢 Doctor's Explanation — 'Uterine inversion is a 1-mark question with a 5-word answer: Do NOT pull on the cord. The examiner wants to hear: wait for separation signs, then controlled cord traction with uterine support (Brandt-Andrews maneuver).'",
    },

    {
      type: "heading1",
      content: "Bishop Score — Cervical Assessment",
    },
    {
      type: "table",
      content: "Bishop Score Components",
      tableData: {
        headers: ["Parameter", "0", "1", "2", "3"],
        rows: [
          ["Dilation (cm)", "Closed", "1–2", "3–4", "≥5"],
          ["Effacement (%)", "0–30", "40–50", "60–70", "≥80"],
          ["Station", "−3", "−2", "−1/0", "+1/+2"],
          ["Consistency", "Firm", "Medium", "Soft", "—"],
          ["Position", "Posterior", "Mid", "Anterior", "—"],
        ],
      },
    },
    {
      type: "exam",
      content:
        "⭐ EXAM — Bishop score ≥8 = favourable cervix → induction likely to succeed without pre-ripening. Score <6 = unfavourable → cervical ripening first (prostaglandins). MEMORIZE these thresholds.",
      isExam: true,
    },
    {
      type: "doctor",
      content:
        "📢 Doctor's Explanation — 'The department head asked 20 questions on Bishop score in the last 5 years. Know all 5 components, the scoring, and what to do at each threshold. The most common MCQ is: What score indicates a favourable cervix? Answer: ≥8.'",
    },

    {
      type: "heading1",
      content: "Mechanisms of Normal Labour (Cardinal Movements)",
    },
    {
      type: "text",
      content: "Applies to vertex (occiput anterior) presentation — the most common (95%).",
    },
    {
      type: "numbered",
      content: "Engagement — BPD passes the pelvic inlet. Station = 0.",
    },
    {
      type: "numbered",
      content: "Descent — throughout all stages; accelerates in second stage.",
    },
    {
      type: "numbered",
      content: "Flexion — chin onto chest; presents smallest diameter (suboccipitobregmatic ~9.5 cm).",
    },
    {
      type: "numbered",
      content: "Internal Rotation — occiput rotates to pubic symphysis (OA position).",
    },
    {
      type: "numbered",
      content: "Extension — head delivered under pubic arch by extension.",
    },
    {
      type: "numbered",
      content: "Restitution — head rotates back to original position relative to shoulders.",
    },
    {
      type: "numbered",
      content: "External Rotation (Shoulder Rotation) — shoulders rotate to AP diameter.",
    },
    {
      type: "numbered",
      content: "Expulsion — anterior shoulder under symphysis, then posterior shoulder over perineum, then trunk.",
    },
    {
      type: "doctor",
      content:
        "📢 Doctor's Explanation — 'Use the mnemonic EDFIREES to remember the order. The most testable movement is internal rotation because students always mix it up with restitution. Internal = before delivery. Restitution = after delivery of head.'",
    },
    {
      type: "exam",
      content:
        "⭐ EXAM — Order of cardinal movements is a classic exam question. The smallest fetal diameter presented = suboccipitobregmatic = 9.5 cm (after flexion). BPD = 9.5 cm. These two numbers come up repeatedly.",
      isExam: true,
    },

    {
      type: "heading1",
      content: "Fetal Monitoring in Labour",
    },
    {
      type: "heading2",
      content: "CTG Interpretation (Cardiotocography)",
    },
    {
      type: "bullet",
      content: "Baseline FHR: 110–160 bpm (normal)",
    },
    {
      type: "bullet",
      content: "Variability: 5–25 bpm (normal). <5 for >40 min = non-reassuring",
    },
    {
      type: "bullet",
      content: "Accelerations: Rise ≥15 bpm for ≥15 sec → reassuring",
    },
    {
      type: "subbullet",
      content: "Absence of accelerations alone is not non-reassuring",
    },
    {
      type: "bullet",
      content: "Decelerations: Early (vagal), Late (uteroplacental insufficiency), Variable (cord compression)",
    },
    {
      type: "exam",
      content:
        "⭐ EXAM — Late decelerations = uteroplacental insufficiency = sign of fetal distress. This is the most dangerous pattern on CTG. Always requires immediate assessment and possible delivery.",
      isExam: true,
    },
    {
      type: "warning",
      content:
        "⚠️ WARNING — Sinusoidal pattern on CTG = severe fetal anemia (e.g., Rh isoimmunization) → EMERGENCY. Do not confuse with normal variability.",
    },
    {
      type: "doctor",
      content:
        "📢 Doctor's Explanation — 'NICE guidelines 2022 classify CTG as Normal, Suspicious, or Pathological. In our exam, the key question is always: What do you do next? For pathological CTG: call senior, prepare for delivery, consider fetal blood sampling if available.'",
    },

    {
      type: "heading1",
      content: "Active Management of Third Stage (AMTSL)",
    },
    {
      type: "text",
      content: "Standard of care to prevent PPH. Components:",
    },
    {
      type: "numbered",
      content: "Oxytocin 10 IU IM immediately after delivery of anterior shoulder (or within 1 minute of birth)",
    },
    {
      type: "numbered",
      content: "Controlled cord traction (Brandt-Andrews maneuver) after signs of separation",
    },
    {
      type: "numbered",
      content: "Uterine massage after placental delivery",
    },
    {
      type: "exam",
      content:
        "⭐ EXAM — Oxytocin dose in AMTSL = 10 IU IM. NOT IV bolus (can cause hypotension). If oxytocin unavailable → Misoprostol 600 mcg oral. These doses are testable.",
      isExam: true,
    },
    {
      type: "doctor",
      content:
        "📢 Doctor's Explanation — 'Why not IV bolus? Because rapid IV oxytocin causes profound hypotension and even cardiac arrest. The exam will try to give you 'IV 10 IU' as a correct-looking option. It is WRONG in the context of third stage management. The correct route is IM.'",
    },
    {
      type: "warning",
      content:
        "⚠️ WARNING — PPH Definition: Blood loss >500 mL after vaginal delivery or >1000 mL after CS. Primary PPH = within 24h. Secondary PPH = 24h to 6 weeks.",
    },
  ],

  mcqs: [
    {
      id: 1,
      question: "A primigravida is in active labour. Her cervix was 5 cm dilated 2 hours ago and is now 6 cm. What is the most appropriate management?",
      options: [
        "Immediate caesarean section",
        "Augmentation with oxytocin",
        "Continue monitoring — this is normal progress",
        "Artificial rupture of membranes",
      ],
      correct: 1,
      explanation:
        "Active phase progress should be ≥1 cm/hour. After 2 hours with only 1 cm progress (0.5 cm/hr), this is active phase arrest. The first step is assessment (check presentation, position, CPD) then augmentation with oxytocin if no contraindication. Immediate CS is not first-line without assessing augmentability.",
      tag: "Labour",
      isExam: true,
    },
    {
      id: 2,
      question: "Which of the following is the MOST reliable sign of true labour?",
      options: [
        "Regular painful contractions",
        "Rupture of membranes",
        "Bloody show",
        "Progressive cervical dilation",
      ],
      correct: 3,
      explanation:
        "Progressive cervical dilation is the most reliable sign of true labour. Contractions can be regular without causing dilation (false labour/Braxton Hicks). Rupture of membranes and show can occur without labour being established.",
      tag: "Labour",
      isExam: true,
    },
    {
      id: 3,
      question: "A Bishop score of 4 is recorded before induction of labour. What is the most appropriate next step?",
      options: [
        "Proceed directly with oxytocin infusion",
        "Perform immediate ARM",
        "Cervical ripening with prostaglandins",
        "Schedule elective CS",
      ],
      correct: 2,
      explanation:
        "Bishop score <6 indicates an unfavourable cervix. Cervical ripening with prostaglandins (e.g., dinoprostone) or misoprostol is required before oxytocin induction. Direct oxytocin on an unfavourable cervix has high failure rate.",
      tag: "Labour",
      isExam: true,
    },
    {
      id: 4,
      question: "During the third stage of labour, the doctor applies controlled cord traction and the uterus descends into the vagina. What has occurred?",
      options: [
        "Normal placental separation",
        "Uterine inversion",
        "Cord prolapse",
        "Placenta accreta",
      ],
      correct: 1,
      explanation:
        "Uterine inversion occurs when premature cord traction is applied before placental separation, or with sudden fundal pressure. The uterus descends through the cervix. This is a life-threatening emergency requiring immediate manual replacement.",
      tag: "Delivery",
      isExam: true,
    },
    {
      id: 5,
      question: "Which fetal heart rate pattern on CTG is most indicative of uteroplacental insufficiency?",
      options: [
        "Early decelerations",
        "Variable decelerations",
        "Late decelerations",
        "Accelerations",
      ],
      correct: 2,
      explanation:
        "Late decelerations (nadir after peak of contraction) indicate uteroplacental insufficiency — the placenta cannot maintain adequate fetal oxygenation during contractions. This is the most ominous CTG pattern associated with fetal acidosis.",
      tag: "Fetal Monitoring",
      isExam: true,
    },
    {
      id: 6,
      question: "The cardinal movement where the occiput moves from a transverse position to face the pubic symphysis is called:",
      options: [
        "Restitution",
        "External rotation",
        "Internal rotation",
        "Flexion",
      ],
      correct: 2,
      explanation:
        "Internal rotation: the occiput rotates 90° from transverse to face the pubic symphysis (OA position), occurring as the head descends through the mid-pelvis. Restitution occurs AFTER delivery of the head.",
      tag: "Labour",
      isExam: false,
    },
    {
      id: 7,
      question: "What is the recommended oxytocin dose and route for active management of the third stage?",
      options: [
        "5 IU intravenous bolus",
        "10 IU intramuscular",
        "20 IU intravenous infusion",
        "10 IU intravenous bolus",
      ],
      correct: 1,
      explanation:
        "AMTSL uses Oxytocin 10 IU IM. IV bolus of oxytocin is contraindicated due to risk of profound hypotension and cardiovascular collapse. If oxytocin is unavailable, misoprostol 600 mcg oral is the alternative.",
      tag: "Delivery",
      isExam: true,
    },
    {
      id: 8,
      question: "A multigravida has been in the second stage of labour for 90 minutes without delivery. She has an epidural. What is the appropriate assessment?",
      options: [
        "This is within normal limits — continue expectant management",
        "Second stage is prolonged — proceed to instrumental delivery",
        "Immediate caesarean section",
        "Increase oxytocin dose",
      ],
      correct: 0,
      explanation:
        "For a multigravida WITH epidural, the second stage limit is extended to 2 hours (normally 1 hour, +1 hour for epidural). At 90 minutes, she is still within normal limits. Continue monitoring and pushing with contractions.",
      tag: "Labour",
      isExam: true,
    },
    {
      id: 9,
      question: "Which of the following describes the fetal diameter presented during normal vertex labour after complete flexion?",
      options: [
        "Occipitofrontal diameter — 11.5 cm",
        "Mentovertical diameter — 13.5 cm",
        "Suboccipitobregmatic diameter — 9.5 cm",
        "Biparietal diameter — 9.5 cm",
      ],
      correct: 2,
      explanation:
        "After complete flexion, the suboccipitobregmatic diameter (9.5 cm) is presented — the smallest AP diameter. This is why flexion is important for successful vaginal delivery. The BPD is also 9.5 cm (transverse).",
      tag: "Labour",
      isExam: true,
    },
    {
      id: 10,
      question: "Primary postpartum haemorrhage is defined as blood loss exceeding:",
      options: [
        "300 mL within 24 hours after vaginal delivery",
        "500 mL within 24 hours after vaginal delivery",
        "1000 mL within 48 hours after vaginal delivery",
        "500 mL within 6 weeks after delivery",
      ],
      correct: 1,
      explanation:
        "Primary PPH = blood loss >500 mL within 24 hours of vaginal delivery (>1000 mL after CS). Secondary PPH = abnormal bleeding from 24 hours to 6 weeks postpartum. The 4 Ts of PPH causes: Tone, Trauma, Tissue, Thrombin.",
      tag: "Delivery",
      isExam: true,
    },
    {
      id: 11,
      question: "A CTG shows a sinusoidal pattern. What is the most likely underlying cause?",
      options: [
        "Normal sleep cycle",
        "Fetal hypoxia from late decelerations",
        "Severe fetal anaemia",
        "Maternal fever",
      ],
      correct: 2,
      explanation:
        "Sinusoidal pattern (smooth, sine-wave-like undulations, 3–5 cycles/min, amplitude 5–15 bpm, absent accelerations) = severe fetal anaemia (e.g., Rh isoimmunization, feto-maternal haemorrhage). This is a fetal emergency requiring immediate delivery.",
      tag: "Fetal Monitoring",
      isExam: true,
    },
    {
      id: 12,
      question: "Which Bishop score parameter assesses the relationship of the presenting part to the ischial spines?",
      options: ["Dilation", "Effacement", "Station", "Consistency"],
      correct: 2,
      explanation:
        "Station refers to the level of the presenting part in relation to the ischial spines. Station 0 = at ischial spines. Negative = above (−1, −2, −3). Positive = below (+1, +2, +3 = crowning).",
      tag: "Labour",
      isExam: false,
    },
  ],

  shortAnswers: [
    {
      id: 1,
      question: "Define normal labour and list its essential criteria.",
      answer:
        "Normal labour (eutocia) is defined as spontaneous onset of labour after 28 weeks gestation, with a vertex (cephalic) presentation, single fetus, and completion within 18 hours. It results in vaginal delivery without maternal or fetal complications. Criteria: (1) Spontaneous onset, (2) Vertex presentation, (3) Singleton pregnancy, (4) Duration ≤18 hours, (5) No complications.",
      tag: "Labour",
      isExam: true,
    },
    {
      id: 2,
      question: "List all 5 components of the Bishop score and state what score indicates a favourable cervix.",
      answer:
        "Bishop score components (scored 0–3 each, max 13): (1) Cervical Dilation (cm): 0=closed, 1=1–2cm, 2=3–4cm, 3=≥5cm. (2) Effacement (%): 0=0–30%, 1=40–50%, 2=60–70%, 3=≥80%. (3) Station: 0=−3, 1=−2, 2=−1/0, 3=+1/+2. (4) Consistency: 0=firm, 1=medium, 2=soft. (5) Position: 0=posterior, 1=mid, 2=anterior. Favourable cervix = score ≥8 (induction likely successful). Unfavourable = <6 (cervical ripening required).",
      tag: "Labour",
      isExam: true,
    },
    {
      id: 3,
      question: "Describe the cardinal movements of normal labour in the correct order.",
      answer:
        "The 8 cardinal movements (EDFIREES): (1) Engagement — BPD passes pelvic inlet. (2) Descent — throughout labour. (3) Flexion — chin to chest, suboccipitobregmatic diameter presented (9.5 cm). (4) Internal Rotation — occiput to pubic symphysis. (5) Extension — head delivered under pubic arch. (6) Restitution — head realigns with shoulders. (7) External Rotation — shoulders rotate to AP diameter. (8) Expulsion — delivery of body.",
      tag: "Labour",
      isExam: false,
    },
    {
      id: 4,
      question: "What are the signs of placental separation in the third stage of labour?",
      answer:
        "Signs of placental separation (Calkin's sign complex): (1) Uterus becomes globular and firm (Calkin's sign proper). (2) Cord lengthening at vulva. (3) Gush of blood from vagina. (4) Uterus rises in abdomen (as placenta descends into lower segment). Do NOT apply controlled cord traction until ALL signs are present — risk of uterine inversion.",
      tag: "Delivery",
      isExam: true,
    },
    {
      id: 5,
      question: "Define primary PPH and list the '4 Ts' of its causes with one example each.",
      answer:
        "Primary PPH = blood loss >500 mL within 24 hours of vaginal delivery (>1000 mL after CS). The 4 Ts: (1) Tone (70%) — uterine atony (commonest cause; Rx: oxytocin, massage). (2) Trauma (20%) — cervical/vaginal laceration, uterine rupture. (3) Tissue (9%) — retained placenta, placenta accreta. (4) Thrombin (1%) — coagulopathy (DIC, von Willebrand disease).",
      tag: "Delivery",
      isExam: true,
    },
    {
      id: 6,
      question: "Classify CTG patterns and describe what 'late decelerations' indicate.",
      answer:
        "CTG Classification (NICE): (1) Normal — all 4 features reassuring. (2) Suspicious — 1 non-reassuring feature. (3) Pathological — ≥2 non-reassuring or ≥1 abnormal feature. Late Decelerations: Deceleration beginning >30 sec after peak of contraction, returning to baseline after contraction ends. Cause: uteroplacental insufficiency → fetal hypoxia. Action: maternal left lateral position, O2, stop oxytocin, call senior, prepare for delivery.",
      tag: "Fetal Monitoring",
      isExam: true,
    },
    {
      id: 7,
      question: "Compare the duration of the second stage of labour in primigravida vs. multigravida, with and without epidural.",
      answer:
        "Second stage duration limits: Primigravida without epidural: 2 hours. Primigravida with epidural: 3 hours. Multigravida without epidural: 1 hour. Multigravida with epidural: 2 hours. Rule: Add 1 hour to base duration if epidural is in situ. Exceeding these limits = prolonged second stage → consider instrumental delivery (ventouse/forceps) or CS.",
      tag: "Labour",
      isExam: true,
    },
    {
      id: 8,
      question: "List the components of active management of the third stage of labour (AMTSL).",
      answer:
        "AMTSL components (WHO-recommended): (1) Uterotonic administration: Oxytocin 10 IU IM within 1 minute of birth of baby (or after delivery of anterior shoulder). If unavailable: Misoprostol 600 mcg oral. (2) Controlled cord traction (Brandt-Andrews maneuver): after signs of separation, apply steady downward traction on cord while supporting uterus suprapubically. (3) Uterine massage: after placental delivery, massage fundus to stimulate sustained contraction. Goal: reduce PPH incidence by 60%.",
      tag: "Delivery",
      isExam: true,
    },
  ],

  flashcards: [
    { id: 1, front: "Definition of Normal Labour", back: "Spontaneous onset, vertex presentation, singleton, ≤18 hours duration, vaginal delivery without complications.", tag: "Labour", isExam: true },
    { id: 2, front: "Most reliable sign of TRUE labour", back: "Progressive cervical dilation (not contractions alone)", tag: "Labour", isExam: true },
    { id: 3, front: "Active phase rate of cervical dilation", back: "≥1 cm/hour (both primigravida and multigravida)", tag: "Labour", isExam: true },
    { id: 4, front: "Latent phase duration (Primi / Multi)", back: "Primigravida: up to 8 hours | Multigravida: up to 4 hours", tag: "Labour", isExam: false },
    { id: 5, front: "Second stage: Primi without epidural", back: "Up to 2 hours", tag: "Labour", isExam: true },
    { id: 6, front: "Second stage: Multi without epidural", back: "Up to 1 hour", tag: "Labour", isExam: true },
    { id: 7, front: "Second stage limit WITH epidural", back: "+ 1 hour added to normal limit (Primi → 3h, Multi → 2h)", tag: "Labour", isExam: true },
    { id: 8, front: "Favourable Bishop score (induction)", back: "≥ 8 → proceed with induction. <6 → cervical ripening first.", tag: "Labour", isExam: true },
    { id: 9, front: "5 components of Bishop Score", back: "Dilation, Effacement, Station, Consistency, Position", tag: "Labour", isExam: true },
    { id: 10, front: "Oxytocin dose in AMTSL", back: "10 IU IM (NOT IV bolus) — within 1 min of birth", tag: "Delivery", isExam: true },
    { id: 11, front: "Alternative to oxytocin in AMTSL", back: "Misoprostol 600 mcg orally", tag: "Delivery", isExam: true },
    { id: 12, front: "Primary PPH definition", back: ">500 mL blood loss within 24h of vaginal delivery (>1000 mL after CS)", tag: "Delivery", isExam: true },
    { id: 13, front: "4 Ts of PPH", back: "Tone (70%) | Trauma (20%) | Tissue (9%) | Thrombin (1%)", tag: "Delivery", isExam: true },
    { id: 14, front: "Late deceleration on CTG = ?", back: "Uteroplacental insufficiency → fetal hypoxia/acidosis", tag: "Fetal Monitoring", isExam: true },
    { id: 15, front: "Sinusoidal CTG pattern = ?", back: "Severe fetal anaemia (Rh isoimmunization, fetomaternal haemorrhage) → EMERGENCY", tag: "Fetal Monitoring", isExam: true },
    { id: 16, front: "Normal CTG baseline FHR", back: "110–160 bpm", tag: "Fetal Monitoring", isExam: false },
    { id: 17, front: "Normal CTG variability", back: "5–25 bpm. <5 bpm for >40 min = non-reassuring", tag: "Fetal Monitoring", isExam: true },
    { id: 18, front: "Cardinal movement after head delivery", back: "Restitution (head realigns with shoulders), then External Rotation", tag: "Labour", isExam: false },
    { id: 19, front: "Fetal diameter after flexion in vertex", back: "Suboccipitobregmatic = 9.5 cm (smallest, allows passage)", tag: "Labour", isExam: true },
    { id: 20, front: "Signs of placental separation (3 key signs)", back: "1. Uterus globular (Calkin's sign) 2. Cord lengthens 3. Gush of blood", tag: "Delivery", isExam: true },
    { id: 21, front: "Uterine inversion cause & prevention", back: "Cause: premature cord traction before separation. Prevention: wait for all separation signs before CCT.", tag: "Delivery", isExam: true },
    { id: 22, front: "Normal variability + accelerations on CTG", back: "Reassuring — fetal wellbeing confirmed (no action needed)", tag: "Fetal Monitoring", isExam: false },
    { id: 23, front: "Normal third stage duration", back: "Up to 30 minutes", tag: "Delivery", isExam: false },
    { id: 24, front: "AMTSL: 3 components", back: "1. Oxytocin 10 IU IM, 2. Controlled cord traction (Brandt-Andrews), 3. Uterine massage", tag: "Delivery", isExam: true },
    { id: 25, front: "Variable decelerations = ?", back: "Cord compression (variable shape, variable timing relative to contractions)", tag: "Fetal Monitoring", isExam: false },
  ],

  mnemonics: [
    {
      id: 1,
      title: "Cardinal Movements of Labour",
      mnemonic: "EDFIREES",
      expansion: [
        "E — Engagement",
        "D — Descent",
        "F — Flexion",
        "I — Internal Rotation",
        "R — Extension (think: Release)",
        "E — Restitution (Reversal)",
        "E — External Rotation",
        "S — Expulsion (Shoots out)",
      ],
      context: "Remember the order of the 8 cardinal movements of normal labour in vertex presentation.",
      tag: "Labour",
    },
    {
      id: 2,
      title: "4 Ts of PPH Causes",
      mnemonic: "TONE TRAUMA TISSUE THROMBIN",
      expansion: [
        "Tone (70%) — Uterine atony (most common)",
        "Trauma (20%) — Lacerations, uterine rupture",
        "Tissue (9%) — Retained placenta/membranes",
        "Thrombin (1%) — Coagulopathy, DIC",
      ],
      context: "Every case of PPH must be assessed for all 4 T causes simultaneously.",
      tag: "Delivery",
    },
    {
      id: 3,
      title: "Bishop Score Components",
      mnemonic: "DECPS — 'DEC-PS'",
      expansion: [
        "D — Dilation",
        "E — Effacement",
        "C — Consistency",
        "P — Position",
        "S — Station",
      ],
      context: "The 5 parameters of Bishop score for cervical assessment before induction.",
      tag: "Labour",
    },
    {
      id: 4,
      title: "CTG Features (Normal)",
      mnemonic: "VARD",
      expansion: [
        "V — Variability (5–25 bpm)",
        "A — Accelerations (≥15 bpm for ≥15 sec)",
        "R — Rate (baseline 110–160 bpm)",
        "D — Decelerations (absent or early only)",
      ],
      context: "Four features assessed on every CTG. All 4 normal = reassuring CTG.",
      tag: "Fetal Monitoring",
    },
    {
      id: 5,
      title: "Signs of Placental Separation",
      mnemonic: "CLUB",
      expansion: [
        "C — Cord lengthens",
        "L — Loss of blood (gush)",
        "U — Uterus globular and rises",
        "B — Brandt-Andrews maneuver can now be applied",
      ],
      context: "Wait for ALL CLUB signs before applying controlled cord traction.",
      tag: "Delivery",
    },
    {
      id: 6,
      title: "Stages of Labour Duration (Primigravida)",
      mnemonic: "8-2-30",
      expansion: [
        "8 hours — First stage latent phase maximum",
        "2 hours — Second stage maximum (without epidural)",
        "30 minutes — Third stage maximum",
      ],
      context: "The three key time limits for primigravida labour. Add 1hr to second stage if epidural.",
      tag: "Labour",
    },
    {
      id: 7,
      title: "Fetal Distress CTG Action",
      mnemonic: "STOP-O",
      expansion: [
        "S — Stop oxytocin",
        "T — Turn patient (left lateral)",
        "O — Oxygen to mother",
        "P — Prepare for delivery / call senior",
        "O — O₂ saturation and fetal blood sampling if available",
      ],
      context: "Immediate steps when pathological CTG is identified (late decelerations, prolonged deceleration).",
      tag: "Fetal Monitoring",
    },
  ],
};
