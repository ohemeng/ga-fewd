console.log("jQuery started");

// ---------- The database of Words -----
/*
var database = [
			{"Game": "g o l f", "Description": "A game played with a white ball"},
			{"Game": "T E N N I S", "Description": "A game played with a racket"},
			{"Game": "S O C C E R", "Description": "A game played with the feet"},
			{"Game": "F O O T B A L L", "Description": "A game played by running & tackling"},
			{"Game": "B A S K E T B A L L", "Description": "A game played with the hand and a hoop"},
]
*/




var medterm = [

{"Game": "ABDOMINAL", "Description": "relating to or near the middle region of the body"},
				
{"Game": "ABDOMINOPLASTY", "Description": "cosmetic surgery of the abdomen to remove wrinkles and tighten the skin over the stomach"},
				
{"Game": "ABDOMINOCENTESIS", "Description": "centesis of the belly to remove fluid for diagnosis"},
				
{"Game": "ABDOMINAL AORTA", "Description": "a branch of the descending aorta"},
				
{"Game": "ABDOMINOUS", "Description": "having a large belly"},
				
{"Game": "ABDUCTION", "Description": "the criminal act of carrying someone away by force"},
				
{"Game": "ABERRANT", "Description": "markedly different from an accepted norm"},
				
{"Game": "ABIOGENESIS", "Description": "a hypothetical organic phenomenon by which living organisms are created from nonliving matter"},
				
{"Game": "ACROCYANOSIS", "Description": "cyanosis of the extremities"},
				
{"Game": "ACROPHOBIA", "Description": "a morbid fear of great heights"},
				
{"Game": "ACROMEGALY", "Description": "enlargement of bones of hands and feet and face"},
				
{"Game": "ACTIVE", "Description": "characterized by energetic movement"},
				
{"Game": "ACUTE", "Description": "ending in a sharp point"},
				
{"Game": "ACUTE GASTRITIS", "Description": "gastritis caused by ingesting an irritant"},
				
{"Game": "ACUTE PYELONEPHRITIS", "Description": "pyelonephritis resulting from the spread of a bladder infection"},
				
{"Game": "TENDON", "Description": "a band of tissue connecting a muscle to its bony attachment"},
				
{"Game": "ADDUCTION", "Description": "moving of a body part toward the central axis of the body"},
				
{"Game": "ADENITIS", "Description": "inflammation of a gland or lymph node"},
				
{"Game": "ADENOCARCINOMA", "Description": "malignant tumor originating in glandular epithelium"},
				
{"Game": "ADENOMA", "Description": "a benign epithelial tumor of glandular origin"},
				
{"Game": "ADHESION", "Description": "the property of sticking together"},
				
{"Game": "AFEBRILE", "Description": "having no fever"},
				
{"Game": "AKINESIA", "Description": "motionlessness attributable to a temporary paralysis"},
				
{"Game": "ALOPECIA", "Description": "partial or complete loss of hair"},
				
{"Game": "AMENIA", "Description": "absence or suppression of normal menstrual flow"},
				
{"Game": "AMENORRHEA", "Description": "absence or suppression of normal menstrual flow"},
				
{"Game": "AMNIOCENTESIS", "Description": "(pregnancy) extraction by centesis of amniotic fluid from a pregnant woman (after the 15th week of pregnancy) to aid in the diagnosis of fetal abnormalities"},
				
{"Game": "AMNION", "Description": "thin innermost membranous sac enclosing the developing embryo of higher vertebrates (reptiles, birds and mammals)"},
				
{"Game": "AMNIOTIC", "Description": "of or related to the amnion or characterized by developing an amnion"},
				
{"Game": "AMNIOTIC FLUID", "Description": "the serous fluid in which the embryo is suspended inside the amnion"},
				
{"Game": "AMNIOTIC SAC", "Description": "thin innermost membranous sac enclosing the developing embryo of higher vertebrates (reptiles, birds and mammals)"},
				
{"Game": "ANALGESIA", "Description": "absence of the sense of pain without loss of consciousness"},
				
{"Game": "ANASTOMOSIS", "Description": "a natural or surgical joining of parts or branches of tubular structures so as to make or become continuous"},
				
{"Game": "ANEMIA", "Description": "a deficiency of red blood cells"},
				
{"Game": "ANEMIC", "Description": "relating to or having a deficiency of red blood cells"},
				
{"Game": "ANENCEPHALOUS", "Description": "characterized by partial or total absence of a brain"},
				
{"Game": "ANESTHESIA", "Description": "loss of bodily sensation"},
				
{"Game": "ANESTHESIOLOGIST", "Description": "a specialist who administers an anesthetic to a patient before he is treated"},
				
{"Game": "ANESTHESIOLOGY", "Description": "the branch of medical science that studies and applies anesthetics"},
				
{"Game": "ANEURYSM", "Description": "a cardiovascular disease from weakening of an artery wall"},
				
{"Game": "ANGIOPLASTY", "Description": "an operation to repair a damaged blood vessel or unblock a coronary artery"},
				
{"Game": "NEUROFIBROMA", "Description": "tumor of the fibrous covering of a peripheral nerve"},
				
{"Game": "ANGIOLOGY", "Description": "the branch of medical science that studies the blood and lymph vessels and their disorders"},
				
{"Game": "ANODONTA", "Description": "thin-shelled freshwater mussels"},
				
{"Game": "ANOMALY", "Description": "deviation from the normal or common order or form or rule"},
				
{"Game": "ANOPIA", "Description": "sightlessness"},
				
{"Game": "ANOREXIA", "Description": "a prolonged disorder of eating due to loss of appetite"},
				
{"Game": "ANTEPARTUM", "Description": "occurring or existing before birth"},
				
{"Game": "ANTIPYRETIC", "Description": "preventing or alleviating fever"},
				
{"Game": "ANURESIS", "Description": "inability to urinate"},
				
{"Game": "ANURIA", "Description": "inability to urinate"},
				
{"Game": "APHASIA", "Description": "inability to use language because of a brain lesion"},
				
{"Game": "APLASIA", "Description": "failure of some tissue or organ to develop"},
				
{"Game": "APNEA", "Description": "temporary cessation of breathing, especially while sleeping"},
				
{"Game": "APNEIC", "Description": "of or relating to apnea"},
				
{"Game": "ARTERIOSCLEROSIS", "Description": "sclerosis of the arterial walls"},
				
{"Game": "ARTHRITIS", "Description": "inflammation of a joint or joints"},
				
{"Game": "ARTHROPLASTY", "Description": "surgical reconstruction or replacement of a malformed or degenerated joint"},
				
{"Game": "ASEPSIS", "Description": "the process of inhibiting the growth and multiplication of microorganisms"},
				
{"Game": "ASYMPTOMATIC", "Description": "having no signs or manifestations of an illness or disease"},
				
{"Game": "ATHEROSCLEROTIC", "Description": "of or relating to atherosclerosis"},
				
{"Game": "ATROPHY", "Description": "a decrease in size of an organ caused by disease or disuse"},
				
{"Game": "BENIGN", "Description": "kind in disposition or manner"},
				
{"Game": "BIOPSY", "Description": "the removal and examination of tissue from a living body"},
				
{"Game": "BLASTODERM", "Description": "a layer of cells on the inside of the blastula"},
				
{"Game": "BLASTODERM", "Description": "a layer of cells on the inside of the blastula"},
				
{"Game": "BLEPHARITIS", "Description": "inflammation of the eyelids characterized by redness and swelling and dried crusts"},
				
{"Game": "BLEPHARITIS", "Description": "inflammation of the eyelids characterized by redness and swelling and dried crusts"},
				
{"Game": "BLEPHAROSPASM", "Description": "spasm of the eyelid muscle resulting in closure of the eye"},
				
{"Game": "BLEPHARISM", "Description": "condition in which a person blinks continuously"},
				
{"Game": "BRADYCARDIA", "Description": "abnormally slow heartbeat"},
				
{"Game": "BRADYCARDIA", "Description": "abnormally slow heartbeat"},
				
{"Game": "BRONCHIOLITIS", "Description": "inflammation of the membranes lining the bronchioles"},
				
{"Game": "BRONCHITIS", "Description": "inflammation of the membranes lining the bronchial tubes"},
				
{"Game": "BRONCHOPNEUMONIA", "Description": "pneumonia characterized by acute inflammation of the walls of the bronchioles"},
				
{"Game": "BRONCHOSCOPE", "Description": "a slender tubular instrument used to examine the bronchial tubes"},
				
{"Game": "BRONCHOSPASM", "Description": "a spasm of the bronchi that makes exhalation difficult and noisy; associated with asthma and bronchitis"},
				
{"Game": "CARCINOGENIC", "Description": "causing or tending to cause cancer"},
				
{"Game": "CARCINOMA", "Description": "any malignant tumor derived from epithelial tissue"},
				
{"Game": "CARDIAC ARREST", "Description": "absence of systole"},
				
{"Game": "CARDIOLOGY", "Description": "the branch of medicine dealing with the heart and its diseases"},
				
{"Game": "CARDIOLOGIST", "Description": "a specialist in the structure and function of the heart"},
				
{"Game": "CARDIOLOGY", "Description": "the branch of medicine dealing with the heart and its diseases"},
				
{"Game": "CARDIOMEGALY", "Description": "an abnormal enlargement of the heart"},
				
{"Game": "CARDITIS", "Description": "inflammation of the heart"},
				
{"Game": "CAUTERIZATION", "Description": "the act of coagulating blood and destroying tissue with a hot iron or caustic agent or by freezing"},
				
{"Game": "CENTRAL", "Description": "in or near an inner area"},
				
{"Game": "CEPHALALGIA", "Description": "pain in the head caused by dilation of cerebral arteries or muscle contractions or a reaction to drugs"},
				
{"Game": "CEPHALIC", "Description": "of or relating to the head"},
				
{"Game": "CEPHALOMETRY", "Description": "measurement of human heads"},
				
{"Game": "CEREBROSPINAL", "Description": "of or relating to the brain and spinal cord"},
				
{"Game": "CEREBROVASCULAR", "Description": "of or relating to the brain and the blood vessels that supply it"},
				
{"Game": "CEREBRUM", "Description": "anterior portion of the brain consisting of two hemispheres"},
				
{"Game": "CHEILITIS", "Description": "inflammation and cracking of the skin of the lips"},
				
{"Game": "CHEILOSCHISIS", "Description": "a congenital cleft in the middle of the upper lip"},
				
{"Game": "CHEILOSIS", "Description": "a disorder of the lips marked by scaling and fissures at the corners of the mouth; caused by a deficiency of riboflavin"},
				
{"Game": "CHEMOTHERAPY", "Description": "the use of chemical agents to treat or control disease"},
				
{"Game": "CHEYNE-STOKES RESPIRATION", "Description": "abnormal respiration in which periods of shallow and deep breathing alternate"},
				
{"Game": "CHOLECYSTECTOMY", "Description": "surgical removal of the gall bladder"},
				
{"Game": "CHOLECYSTITIS", "Description": "inflammation of the gall bladder"},
				
{"Game": "CHOLECALCIFEROL", "Description": "a fat-soluble vitamin that prevents rickets"},
				
{"Game": "ABDOMINOUS", "Description": "having a large belly"},
				
{"Game": "CHONDRODYSTROPHY", "Description": "an inherited skeletal disorder beginning before birth"},
				
{"Game": "CHRONIC", "Description": "long-lasting or characterized by long suffering"},
				
{"Game": "CHRONIC PYELONEPHRITIS", "Description": "pyelonephritis that develops slowly and can lead to renal failure if untreated; often associated with a kidney stone or with narrowing of the urinary passageways"},
				
{"Game": "CIRCUMDUCTION", "Description": "a circular movement of a limb or eye"},
				
{"Game": "CLIMACTERIC", "Description": "the time in a woman's life in which the menstrual cycle ends"},
				
{"Game": "COLIC", "Description": "acute abdominal pain (especially in infants)"},
				
{"Game": "COLITIS", "Description": "inflammation of the colon"},
				
{"Game": "CELIOCENTESIS", "Description": "removal of fluid from the abdomen by centesis"},
				
{"Game": "COLONOSCOPE", "Description": "an elongated fiberoptic endoscope for examining the entire colon from cecum to rectum"},
				
{"Game": "CONCEPTION", "Description": "the creation of something in the mind"},
				
{"Game": "CORNEAL", "Description": "of or related to the cornea"},
				
{"Game": "CORONARY THROMBOSIS", "Description": "obstruction of blood flow in a coronary artery by a blood clot (thrombus)"},
				
{"Game": "CRANIOTOMY", "Description": "a surgical opening through the skull"},
				
{"Game": "CRANIOMETER", "Description": "an instrument for measuring skull sizes"},
				
{"Game": "URANOPLASTY", "Description": "surgical correction of a defect of the palate"},
				
{"Game": "CRANIUM", "Description": "the part of the skull that encloses the brain"},
				
{"Game": "CRYPTORCHIDISM", "Description": "failure of one or both testes to move into the scrotum as the male fetus develops"},
				
{"Game": "CYANOSIS", "Description": "a bluish discoloration of the skin and mucous membranes"},
				
{"Game": "CYSTOPARALYSIS", "Description": "paralysis of the urinary bladder"},
				
{"Game": "CYSTOPLEGIA", "Description": "paralysis of the urinary bladder"},
				
{"Game": "CYSTITIS", "Description": "inflammation of the urinary bladder and ureters"},
				
{"Game": "CYTOPLAST", "Description": "the intact cytoplasmic content of a cell"},
				
{"Game": "DEFIBRILLATION", "Description": "treatment by stopping fibrillation of heart muscles"},
				
{"Game": "DEHISCENCE", "Description": "release of material by splitting open of an organ or tissue"},
				
{"Game": "DENTAL", "Description": "of or relating to the teeth"},
				
{"Game": "ODONTALGIA", "Description": "an ache localized in or around a tooth"},
				
{"Game": "DERMATITIS", "Description": "inflammation of the skin"},
				
{"Game": "DERMATOLOGIST", "Description": "a doctor who specializes in the physiology of the skin"},
				
{"Game": "DERMATOME", "Description": "a surgical instrument used to cut very thin slices of skin"},
				
{"Game": "DERMATOSIS", "Description": "disorder involving lesions or eruptions of the skin"},
				
{"Game": "DIAGNOSIS", "Description": "identifying the nature or cause of some phenomenon"},
				
{"Game": "DIAGNOSTICIAN", "Description": "a doctor who specializes in medical diagnosis"},
				
{"Game": "DIAPHRAGM", "Description": "a muscular partition in the chest used in respiration"},
				
{"Game": "DILATION", "Description": "the act of expanding an aperture"},
				
{"Game": "DIPLOCOCCUS", "Description": "Gram-positive bacteria usually occurring in pairs"},
				
{"Game": "DIPLOPIA", "Description": "visual impairment in which an object is seen as two objects"},
				
{"Game": "DISEASE", "Description": "an impairment of health"},
				
{"Game": "DISTAL", "Description": "situated farthest from point of attachment or origin, as of a limb or bone"},
				
{"Game": "DORSALLY", "Description": "in a dorsal location or direction"},

{"Game": "ABDUCTOR", "Description": "a muscle that draws a body part away from the median line"},
{"Game": "ACROMEGALY", "Description": "enlargement of bones of hands and feet and face"},
{"Game": "ACUTE", "Description": "ending in a sharp point"},
{"Game": "ADDUCTOR", "Description": "a muscle that draws a body part toward the median line"},
{"Game": "AMENORRHEA", "Description": "absence or suppression of normal menstrual flow"},
{"Game": "AMNIOCENTESIS", "Description": "(pregnancy) extraction by centesis of amniotic fluid from a pregnant woman (after the 15th week of pregnancy) to aid in the diagnosis of fetal abnormalities"},
{"Game": "AMNIOTIC FLUID", "Description": "the serous fluid in which the embryo is suspended inside the amnion"},
{"Game": "ANABOLISM", "Description": "the synthesis in living organisms of more complex substances (e.g., living tissue) from simpler ones together with the storage of energy"},
{"Game": "ANALYSIS", "Description": "abstract separation of a whole into its constituent parts"},
{"Game": "ANEMIA", "Description": "a deficiency of red blood cells"},
{"Game": "ANGIOPLASTY", "Description": "an operation to repair a damaged blood vessel or unblock a coronary artery"},
{"Game": "ANOREXIA", "Description": "a prolonged disorder of eating due to loss of appetite"},
{"Game": "ARTERIOSCLEROSIS", "Description": "sclerosis of the arterial walls"},
{"Game": "ASCITES", "Description": "accumulation of serous fluid in peritoneal cavity"},
{"Game": "ATRESIA", "Description": "an abnormal condition in which a normal opening or tube in the body (as the urethra) is closed or absent"},
{"Game": "BIOPSY", "Description": "the removal and examination of tissue from a living body"},
{"Game": "CALCULUS", "Description": "the branch of mathematics that is concerned with limits and with the differentiation and integration of functions"},
{"Game": "CATABOLISM", "Description": "breakdown in living organisms of more complex substances into simpler ones together with release of energy"},
{"Game": "CATHETER", "Description": "a thin flexible tube inserted into the body"},
{"Game": "CHANCRE", "Description": "a small hard painless nodule at the site of entry of a pathogen (as syphilis)"},
{"Game": "CHLAMYDIA", "Description": "a sexually transmitted infection caused by bacteria of the genus Chlamydia"},
{"Game": "CHOLELITHIASIS", "Description": "the presence of gallstones in the gallbladder"},
{"Game": "COLONOSCOPY", "Description": "visual examination of the colon from the cecum to the rectum"},
{"Game": "COLOSTOMY", "Description": "a surgical operation that creates an opening from the colon to the surface of the body to function as an anus"},
{"Game": "CONGENITAL ANOMALY", "Description": "a defect that is present at birth"},
{"Game": "CONTRALATERAL", "Description": "on or relating to the opposite side (of the body)"},
{"Game": "CORONAL", "Description": "flower arrangement consisting of a circular band of foliage or flowers for ornamental purposes"},
{"Game": "CYSTITIS", "Description": "inflammation of the urinary bladder and ureters"},
{"Game": "CYSTOCELE", "Description": "hernia in which the urinary bladder protrudes through the wall of the vagina; sometimes occurs after childbirth"},
{"Game": "CYTOLOGY", "Description": "the branch of biology that studies the structure and function of cells"},
{"Game": "DIABETES INSIPIDUS", "Description": "a rare form of diabetes resulting from a deficiency of vasopressin (the pituitary hormone that regulates the kidneys); characterized by the chronic excretion of large amounts of pale dilute urine which results in dehydration and extreme thirst"},
{"Game": "DIAGNOSIS", "Description": "identifying the nature or cause of some phenomenon"},
{"Game": "DIALYSIS", "Description": "separation of substances in solution by means of their unequal diffusion through semipermeable membranes"},
{"Game": "DIARRHEA", "Description": "frequent and watery bowel movements"},
{"Game": "DILATION AND CURETTAGE", "Description": "a surgical procedure usually performed under local anesthesia in which the cervix is dilated and the endometrial lining of the uterus is scraped with a curet; performed to obtain tissue samples or to stop prolonged bleeding or to remove small tumors or to remove fragments of placenta after childbirth or as a method of abortion"},
{"Game": "DISTAL", "Description": "situated farthest from point of attachment or origin, as of a limb or bone"},
{"Game": "DIVERTICULITIS", "Description": "inflammation of a diverticulum in the digestive tract"},
{"Game": "DYSMENORRHEA", "Description": "painful menstruation"},
{"Game": "DYSPEPSIA", "Description": "a digestive disorder characterized by heartburn or nausea"},
{"Game": "DYSPHAGIA", "Description": "condition in which swallowing is difficult or painful"},
{"Game": "DYSPNEA", "Description": "difficult or labored respiration"},
{"Game": "DYSURIA", "Description": "painful or difficult urination"},
{"Game": "EDEMA", "Description": "swelling from excessive accumulation of watery fluid"},
{"Game": "ELECTROLYTE", "Description": "a solution that conducts electricity"},
{"Game": "EMBRYO", "Description": "an animal organism in the early stages of growth"},
{"Game": "ENDOMETRIOSIS", "Description": "the presence of endometrium elsewhere than in the lining of the uterus; causes premenstrual pain and dysmenorrhea"},
{"Game": "ENDOSCOPE", "Description": "a long slender medical instrument for examining the interior of a bodily organ or performing minor surgery"},
{"Game": "EPISIOTOMY", "Description": "surgical incision of the perineum to enlarge the vagina and so facilitate delivery during childbirth"},
{"Game": "ESTROGEN", "Description": "a general term for female steroid sex hormones that are secreted by the ovary and responsible for typical female sexual characteristics"},
{"Game": "ETIOLOGY", "Description": "the cause of a disease"},
{"Game": "EXCISION", "Description": "surgical removal of a body part or tissue"},
{"Game": "FETUS", "Description": "an unborn vertebrate in the later stages of development"},
{"Game": "FLATULENCE", "Description": "a state of excessive gas in the alimentary canal"},
{"Game": "GAMETE", "Description": "a mature sexual reproductive cell"},
{"Game": "GASTROENTERITIS", "Description": "inflammation of the stomach and intestines"},
{"Game": "GESTATION", "Description": "the period during which an embryo develops"},
{"Game": "GINGIVITIS", "Description": "inflammation of the gums"},
{"Game": "GONAD", "Description": "a gland in which gametes (sex cells) are produced"},
{"Game": "GYNECOLOGY", "Description": "the branch of medicine that deals with the diseases and hygiene of women"},
{"Game": "HEMATEMESIS", "Description": "vomiting blood"},
{"Game": "HEMATOMA", "Description": "a localized swelling filled with blood"},
{"Game": "HEMATURIA", "Description": "the presence of blood in the urine"},
{"Game": "HEMOLYSIS", "Description": "lysis of erythrocytes with the release of hemoglobin"},
{"Game": "HEMOPTYSIS", "Description": "coughing up blood from the respiratory tract"},
{"Game": "HEMORRHAGE", "Description": "the flow of blood from a ruptured blood vessel"},
{"Game": "HEMOSTASIS", "Description": "surgical procedure of stopping the flow of blood"},
{"Game": "HEPATOMEGALY", "Description": "abnormal enlargement of the liver"},
{"Game": "HERNIA", "Description": "rupture in tissue through which a bodily structure protrudes"},
{"Game": "HERPES GENITALIS", "Description": "an infection caused by herpes simplex virus type 2 (HSV-2) that is usually transmitted by sexual contact; marked by recurrent attacks of painful eruptions on the skin and mucous membranes of the genital area"},
{"Game": "HISTOLOGIST", "Description": "anatomist who specializes in the microscopic study of animal tissues"},
{"Game": "HYPERTROPHY", "Description": "abnormal enlargement of a body part or organ"},
{"Game": "HYSTERECTOMY", "Description": "surgical removal of the uterus"},
{"Game": "IATROGENIC", "Description": "induced by a physician's Games or therapy"},
{"Game": "IDIOPATHIC", "Description": "(of diseases) arising from an unknown cause"},
{"Game": "ILEUS", "Description": "blockage of the intestine (especially the ileum) that prevents the contents of the intestine from passing to the lower bowel"},
{"Game": "IMPOTENCE", "Description": "an inability (usually of the male animal) to copulate"},
{"Game": "IN VITRO", "Description": "in an artificial environment outside the living organism"},
{"Game": "INCISION", "Description": "the cutting of or into body tissues or organs"},
{"Game": "INFERIOR", "Description": "of or characteristic of low rank or importance"},
{"Game": "INTUSSUSCEPTION", "Description": "the folding in of an outer layer so as to form a pocket in the surface"},
{"Game": "ISCHEMIA", "Description": "local anemia in a given body part sometimes resulting from vasoconstriction or thrombosis or embolism"},
{"Game": "KARYOTYPE", "Description": "the appearance of the chromosomal makeup of a somatic cell in an individual or species (including the number and arrangement and size and structure of the chromosomes)"},
{"Game": "LACTATION", "Description": "the production and secretion of milk by the mammary glands"},
{"Game": "LAPAROSCOPE", "Description": "a slender endoscope inserted through an incision in the abdominal wall in order to examine the abdominal organs or to perform minor surgery"},
{"Game": "LAPAROSCOPY", "Description": "laparotomy performed with a laparoscope that makes a small incision to examine the abdominal cavity (especially the ovaries and Fallopian tubes)"},
{"Game": "LATERAL", "Description": "situated at or extending to the side"},
{"Game": "LIGATION", "Description": "tying a duct or blood vessel with a ligature"},
{"Game": "LIPOMA", "Description": "a tumor consisting of fatty tissue"},
{"Game": "MALAISE", "Description": "a general feeling of discomfort, uneasiness, or depression"},
{"Game": "MASTECTOMY", "Description": "surgical removal of a breast to remove a malignant tumor"},
{"Game": "MEDIAL", "Description": "relating to or situated in or extending toward the middle"},
{"Game": "MENSTRUATION", "Description": "the monthly discharge of blood from the uterus of nonpregnant women from puberty to menopause"},
{"Game": "METABOLISM", "Description": "the organic processes that are necessary for life"},
{"Game": "METAMORPHOSIS", "Description": "striking change in appearance or character or circumstances"},
{"Game": "MICTURITION", "Description": "the discharge of urine"},
{"Game": "NECROSIS", "Description": "the localized death of living cells"},
{"Game": "NEPHRON", "Description": "any of the small tubules that are the excretory units of the vertebrate kidney"},
{"Game": "OSTEOMALACIA", "Description": "abnormal softening of bones caused by deficiencies of phosphorus or calcium or vitamin D"},
{"Game": "OVULATION", "Description": "the expulsion of an ovum from the ovary"},
{"Game": "OXYTOCIN", "Description": "hormone secreted by the posterior pituitary gland"},
{"Game": "PANCREATITIS", "Description": "inflammation of the pancreas"},
{"Game": "PATHOLOGIST", "Description": "a doctor who specializes in medical diagnosis"},
{"Game": "PRODROME", "Description": "an early symptom that a disease is developing or that an attack is about to occur"},
{"Game": "PROGESTERONE", "Description": "a steroid hormone produced in the ovary"},
{"Game": "PROGNOSIS", "Description": "a prediction of the course of a disease"},
{"Game": "PROLAPSE", "Description": "the slipping or falling out of place of an organ"},
{"Game": "PROXIMAL", "Description": "situated nearest to point of attachment or origin"},
{"Game": "PURULENT", "Description": "containing pus"},
{"Game": "PYELOGRAM", "Description": "an X ray of the kidneys and ureters"},
{"Game": "PYLORIC STENOSIS", "Description": "narrowing of the pyloric sphincter that blocks the passage of food from the stomach into the duodenum"},
{"Game": "PYURIA", "Description": "presence of white blood cells in the urine"},
{"Game": "RADIOLOGY", "Description": "the branch of medical science dealing with the medical use of X-rays or other penetrating radiation"},
{"Game": "RELAPSE", "Description": "deteriorate in health"},
{"Game": "RESECTION", "Description": "surgical removal of part of a structure or organ"},
{"Game": "SAGITTAL", "Description": "located in a plane that is parallel to the central plane of the sagittal suture"},
{"Game": "SEMEN", "Description": "the thick white fluid containing spermatozoa that is ejaculated by the male genital tract"},
{"Game": "SPERMATOZOON", "Description": "the male reproductive cell; the male gamete"},
{"Game": "STEATORRHEA", "Description": "the presence of greater than normal amounts of fat in the feces which are frothy and foul smelling and floating; a symptom of disorders of fat metabolism and malabsorption syndrome"},
{"Game": "STOMATITIS", "Description": "inflammation of the mucous membrane of the mouth"},
{"Game": "SUPERIOR", "Description": "of high quality or performance"},
{"Game": "SUPINE", "Description": "lying face upward"},
{"Game": "SYMBIOSIS", "Description": "the relation between two interdependent species of organisms"},
{"Game": "SYMMETRY", "Description": "balance among the parts of something"},
{"Game": "SYNDROME", "Description": "a pattern of symptoms indicative of some disease"},
{"Game": "SYPHILIS", "Description": "a common venereal disease caused by the treponema pallidum spirochete; symptoms change through progressive stages; can be congenital (transmitted through the placenta)"},
{"Game": "TESTIS", "Description": "one of the two male reproductive glands that produce spermatozoa and secrete androgens"},
{"Game": "THROMBOCYTE", "Description": "tiny bits of protoplasm found in vertebrate blood"},
{"Game": "TRANSVERSE", "Description": "extending or lying across, in a crosswise direction"},
{"Game": "TUBAL LIGATION", "Description": "a sterilization procedure with women"},
{"Game": "ULTRASONOGRAPHY", "Description": "using the reflections of high-frequency sound waves to construct an image of a body organ (a sonogram); commonly used to observe fetal growth or study bodily organs"},
{"Game": "UREMIA", "Description": "accumulation in the blood of nitrogenous waste products (urea) that are usually excreted in the urine"},
{"Game": "URINATION", "Description": "the discharge of urine"},
{"Game": "URINE", "Description": "liquid excretory product"},
{"Game": "VASECTOMY", "Description": "surgical procedure that removes all or part of the vas deferens (usually as a means of sterilization); is sometimes reversible"},
{"Game": "VISCERA", "Description": "internal organs collectively"},
{"Game": "VOID", "Description": "an empty area or space"},

]

var urinary = [

{"Game": "HOMEOSTASIS", "Description": "state of equilibrium that produces a constant internal environment thoughout the body"},
{"Game": "UREA", "Description": "major waste product of protein metabolism"},
{"Game": "URINE", "Description": "converted form of waste products and excess fluids; excreted from body via urinary bladder"},
{"Game": "KIDNEYS", "Description": "constantly filter the blood to remove waste products and excess water; located retroperitoneally with one on each side of the vertebral column below diaphragm"},
{"Game": "RETROPERITONEAL", "Description": "located behind the peritoneum"},
{"Game": "PERITONEUM", "Description": "membrane that lines abdominal cavity"},
{"Game": "RENAL PELVIS", "Description": "core part of kidney that is surrounded by two layers; receives waste products after they pass through a series of urine"},
{"Game": "RENAL", "Description": "pertaining to kidneys"},
{"Game": "NEPHRONS", "Description": "functional units of the kidneys; contains a glomerulus; forms urine by processes of filtration, reabsorption, and secretion"},
{"Game": "MEDULLA", "Description": "inner layer that contains most of the urine"},
{"Game": "TUBULE", "Description": "small tube"},
{"Game": "GLOMERULUS", "Description": "cluster of capillaries surrounded by a membrane called the Bowman's capsule"},
{"Game": "UROCHROME", "Description": "pigment that gives urine its normal yellow"},
{"Game": "URETERS", "Description": "narrow tubes, each about 10 to 12 inches long; each ureter carries urine from kidney to urinary bladder"},
{"Game": "URETHRA", "Description": "tube extending from the bladder to the outside of the body"},
{"Game": "SPHINCTER", "Description": "ringlike muscle that closes a passageway"},
{"Game": "MICTURITION", "Description": "normal process of excreting urine (3 terms)"},
{"Game": "NEPHROLOGIST", "Description": "specializes in diagnosing and treating diseases and disorders of the kidneys"},
{"Game": "UROLOGIST", "Description": "specialized in diagnosing and treating diseases and disorders of the urinary system of females and the genitourinary system of males"},
{"Game": "RENAL FAILURE", "Description": "inability of the kidney or kidneys to perform their functions; body cannot replace damaged nephrons; too many nephrons have been destroyed (2 terms)"},
{"Game": "ANURIA", "Description": "complete suppression of urine formation by the kidneys (2 terms)"},
{"Game": "ANURESIS", "Description": "complete suppression of urine formation by the kidneys (2 terms)"},
{"Game": "END", "Description": "stage renal disease / ESRD"},
{"Game": "EDEMA", "Description": "excessive fluid in body tissue"},
{"Game": "HYPERPROTEINURIA", "Description": "abnormally high concentrations of protein albumin in the urine"},
{"Game": "HYPOPROTEINEMIA", "Description": "abnormally low concentrations of protein albumin in the blood"},
{"Game": "HYPERLIPIDEMIA", "Description": "abnormally large amount of lipids in the blood"},
{"Game": "NEPHROSIS", "Description": "both mean diseases of the kidney and these terms are used interchangeably with nephrotic syndrome (2 terms)"},
{"Game": "NEPHROPATHY", "Description": "both mean diseases of the kidney and these terms are used interchangeably with nephrotic syndrome (2 terms)"},
{"Game": "GLOMERULONEPHRITIS", "Description": "inflammation of the kidney involving primarily the glomeruli; in acute condition, urine is dark brown or black; often related to autoimmune problem"},
{"Game": "HYDRONEPHROSIS", "Description": "dilation of the renal pelvis of one or both kidneys; result of obstruction of the flow of urine"},
{"Game": "NEPHRECTASIS", "Description": "distention of a kidney"},
{"Game": "DISTENTION", "Description": "state of being enlarged"},
{"Game": "NEPHRITIS", "Description": "inflammation of the kidney"},
{"Game": "NEPHROPYOSIS", "Description": "suppuration of the kidney"},
{"Game": "SUPPURATION", "Description": "formation or discharge of pus"},
{"Game": "PYELITIS", "Description": "inflammation of the renal pelvis"},
{"Game": "PYELONEPHRITIS", "Description": "inflammation of the renal pelvis and of the kidney"},
{"Game": "RENAL COLIC", "Description": "acute pain in the kidney area that is caused by blockage during the passage of a kidney stone"},
{"Game": "CALCULUS", "Description": "abnormal mineral deposit; vary in size from sandlike granules to size of marbles and are named for organ or tissue where they are located (2 terms)"},
{"Game": "NEPHROLITHIASIS", "Description": "disorder characterized by presence of stones in kidney"},
{"Game": "CYSTOLITH", "Description": "stone in the urinary bladder"},
{"Game": "NEPHROLITH", "Description": "stone in the kidney (3 terms)"},
{"Game": "URETEROLITH", "Description": "stone in the ureter"},
{"Game": "HYDROURETER", "Description": "distention of the ureter with urine that cannot flow because the ureter is blocked"},
{"Game": "URETERECTASIS", "Description": "distention of a ureter"},
{"Game": "URETERORRHAGIA", "Description": "discharge of blood from ureter"},
{"Game": "URETEROSTENOSIS", "Description": "stricture of the ureter"},
{"Game": "STRICTURE", "Description": "abnormal band of tissue narrowing a body passage"},
{"Game": "CYSTALGIA", "Description": "pain in urinary bladder (2 terms)"},
{"Game": "CYSTODYNIA", "Description": "pain in urinary bladder (2 terms)"},
{"Game": "CYSTITIS", "Description": "inflammation of the bladder"},
{"Game": "CYSTOCELE", "Description": "hernia of the bladder through the vaginal wall"},
{"Game": "CYSTORRHAGIA", "Description": "bleeding from the bladder"},
{"Game": "REFLUX", "Description": "blockage of urethra can cause urine to back up into ureters; eventually result in damage to the kidneys"},
{"Game": "URETHRALGIA", "Description": "pain in the urethra"},
{"Game": "URETHRITIS", "Description": "inflammation of the urethra"},
{"Game": "URETHRORRHAGIA", "Description": "bleeding from urethra"},
{"Game": "URETHRORRHEA", "Description": "abnormal discharge from the urethra"},
{"Game": "URETHROSTENOSIS", "Description": "stricture or stenosis of the urethra"},
{"Game": "EPISPADIAS", "Description": "in a male, is a congenital abnormality in which the urethral opening is located on the dorsal of the penis; in the female, urethral opening is in the region of the clitoris"},
{"Game": "HYPOSPADIAS", "Description": "in male, is a congenital abnormality in which the urethral opening is on the undersurface o the penis; in female, urethral opening is into the vagina"},
{"Game": "PARASPADIAS", "Description": "congenital abnormality in males in which the urethral opening is on one side of the penis"},
{"Game": "DIURESIS", "Description": "increased excretion of urine"},
{"Game": "DYSURIA", "Description": "difficult or painful urination; frequently associated with UTIs"},
{"Game": "ENURESIS", "Description": "involuntary discharge of urine"},
{"Game": "NOCTURNAL", "Description": "night"},
{"Game": "NOCTURIA", "Description": "excessive urination during the night"},
{"Game": "OLIGURIA", "Description": "scanty urination"},
{"Game": "POLYURIA", "Description": "excessive urination"},
{"Game": "INCONTINENCE", "Description": "inability to control excretory functions"},
{"Game": "CATHETERIZATION", "Description": "insertion of sterile catheter through urethra and into urinary bladder; most commonly performed to withdraw urine, relieve urinary retention pressures, or prevent incontinence during surgical procedures; may be used to place fluid, such as chemotherapy solution, into bladder"},
{"Game": "CYSTOSCOPY", "Description": "visual examination of urinary bladder using cystoscope (2 terms)"},
{"Game": "CYSTOSCOPE", "Description": "used for treatment procedures such as removal of tumors; instrument used in cystoscopy"},
{"Game": "KUB", "Description": "plate of the abdomen"},
{"Game": "FLAT", "Description": "plate of the abdomen"},
{"Game": "UROGRAM", "Description": "resulting record of intravenous urography"},
{"Game": "CYSTOGRAPHY", "Description": "radiographic examination of the bladder after instillation of contrast medium via a urethral catheter"},
{"Game": "CYSTOGRAM", "Description": "resulting film of cystography"},
{"Game": "URINALYSIS", "Description": "examination of urine to determine presence of abnormal elements"},
{"Game": "DIURETICS", "Description": "medications administrated to increase urine secretion to rid the body of excess sodium and water"},
{"Game": "DIALYSIS", "Description": "procedure to remove waste products from the blood of patients whose kidneys no longer function"},
{"Game": "HEMODIALYSIS", "Description": "filters waste products from patient's blood; shunt implanted in patient's arm is connected to artificial kidney machine and arterial blood flows through filters; filters contain dialysate, which removes excess fluids and waste from blood; after these are removed, blood is returned to body through vein (2 terms)"},
{"Game": "DIALYSATE", "Description": "solution made up of water and electrolytes; removes excess fluids and waste from blood"},
{"Game": "NEPHROLYSIS", "Description": "freeing of a kidney from adhesions; can describe a pathologic condition in which there is the destruction of kidney substance"},
{"Game": "ADHESION", "Description": "band of fibers that holds structures together abnormally"},
{"Game": "NEPHROPEXY", "Description": "surgical fixation of a floating kidney"},
{"Game": "NEPHROSTOMY", "Description": "establishment of an opening between the pelvis of the kidney through its cortex to the exterior of the body"},
{"Game": "PYELOPLASTY", "Description": "surgical repair of the renal pelvis"},
{"Game": "PYELOTOMY", "Description": "surgical incision into the renal pelvis"},
{"Game": "LITHOTRIPSY", "Description": "destruction of kidney stone with use of ultrasonic waves traveling through water (3 terms)"},
{"Game": "EXTRACORPOREAL", "Description": "situated or occurring outside the body"},
{"Game": "NEPHROLITHOTOMY", "Description": "surgical removal of kidney stone through an incision in kidney"},
{"Game": "URETERECTOMY", "Description": "surgical removal of a ureter"},
{"Game": "URETEROPLASTY", "Description": "surgical repair of a ureter"},
{"Game": "URETERORRHAPHY", "Description": "suturing of a ureter"},
{"Game": "CYSTECTOMY", "Description": "surgical removal of all or part of the urinary bladder"},
{"Game": "CYSTOPEXY", "Description": "surgical fixation of bladder to the abdominal wall"},
{"Game": "CYSTORRHAPHY", "Description": "suturing of the bladder"},
{"Game": "LITHOTOMY", "Description": "surgical incision for a removal of a stone, usually form the bladder; also used to describe a physical examination position"},
{"Game": "INDWELLING", "Description": "something that remains inside body for a prolonged time"},
{"Game": "MEATOTOMY", "Description": "incision of the urinary meatus to enlarge the opening"},
{"Game": "URETHROPEXY", "Description": "surgical fixation of the urethra usually for the correction of urinary stress incontinence"},
{"Game": "URETHROPLASTY", "Description": "surgical repair of the urethra"},
{"Game": "URETHROSTOMY", "Description": "surgical creation of a permanent opening between urethra and skin"},
{"Game": "URETHROTOMY", "Description": "surgical incision into urethra for relief of a stricture"},

]

// ---------- End of database of Words --------





// var database = medTerm;

// ------------ Hide man --------
$(".head, .neck, .shoulder, .arms1, .arms2, .torso, .leg1, .leg2").css("visibility", "hidden");

var bodyParts = [".leg2", ".leg1", ".torso", ".arms2", ".arms1", ".shoulder", ".neck", ".head"];

/*
head"> head </div>
  <div class="neck"> neck </div>
  <div class="shoulder"> shoulder </div>
  <div class="arms1"> arms1 </div>
  <div class="torso"> torso </div>
  <div class="arms2"> arms2 </div>
  <div class="leg1"> leg1 </div>
  <div class="leg2"> leg2 </div>
*/

// ------------- End of Hide Man ---------------



database = urinary;



/*
// ------------- Database Selection ------------
	// $("#medterm").defaultChecked;

	// database = medterm;

	$('#medterm').on("click", function() {
		database = medterm;
		$(".placeMarkers").text("");
		$(".alphabets").css("visibility", "visible");
		$(".head, .neck, .shoulder, .arms1, .arms2, .torso, .leg1, .leg2").css("visibility", "hidden");
		var rndNumber = Math.floor(Math.random() * database.length); 
		console.log(rndNumber);
		var game = database[rndNumber]["Game"];
		var i;
	//	var j = 0;
		var mycount = 0;
	//	var newArray = [];
		var newGameLength = 0;
		var emptyArray = []

		for(i in game){
			var newClass =  game[i];
			var newLetter = "<div class= '"+  newClass +  " "+ "inlineClass"+ "'>"+ game[i] + "</div>";
			$(".secondWord").append(newLetter);
			$(".inlineClass").css("visibility", "hidden");
		}

		$(".hint").text(database[rndNumber]["Description"]);

		for (i = 0; i < game.split("").length; i++){
				var letterCount = game.split("").length;
				console.log("start of game length "+ game.split("").length);
				$(".placeMarkers").append("_");
				$(".letterCount").text("("+ letterCount + ")");
		}

		for(i in game){
			var newClass =  game[i];
			// $(newClass).css("display", "inline-block");
			var newLetter = "<div class= '"+  newClass +  " "+ "inlineClass"+ "'>"+ game[i] + "</div>";
			$(".secondWord").append(newLetter);
			$(".inlineClass").css("visibility", "hidden");
		}

		startNewGame(game);

	}) 
	// ---------End of Med Term --------------//



	$('#urinary').on("click", function() {
		database = urinary;
		$(".placeMarkers").text("");
		$(".alphabets").css("visibility", "visible");
		$(".head, .neck, .shoulder, .arms1, .arms2, .torso, .leg1, .leg2").css("visibility", "hidden");
		var rndNumber = Math.floor(Math.random() * database.length); 
		console.log(rndNumber);
		var game = database[rndNumber]["Game"];
		var i;
		var j = 0;
		var mycount = 0;
		var newArray = [];
		var newGameLength = 0;
		var emptyArray = []

		for(i in game){
			var newClass =  game[i];
			var newLetter = "<div class= '"+  newClass +  " "+ "inlineClass"+ "'>"+ game[i] + "</div>";
			$(".secondWord").append(newLetter);
			$(".inlineClass").css("visibility", "hidden");
		}

		$(".hint").text(database[rndNumber]["Description"]);

		for (i = 0; i < game.split("").length; i++){
			var letterCount = game.split("").length;
			console.log("start of game length "+ game.split("").length);
			$(".placeMarkers").append("_");
			$(".letterCount").text("("+ letterCount + ")");
		}

		for(i in game){
			var newClass =  game[i];
			// $(newClass).css("display", "inline-block");
			var newLetter = "<div class= '"+  newClass +  " "+ "inlineClass"+ "'>"+ game[i] + "</div>";
			$(".secondWord").append(newLetter);
			$(".inlineClass").css("visibility", "hidden");
		}

		startNewGame(game);

	}) 
	// ------end of Urinary-----//


// ------------- End of Database Selection ------------

*/


var rndNumber = Math.floor(Math.random() * database.length); 
console.log(rndNumber);
var game = database[rndNumber]["Game"];
var i;
var j = 0;
var mycount = 0;
var winSound = new Audio("wav/win.wav");
var endSound = new Audio("wav/gameOver.wav");
$(".hint").text(database[rndNumber]["Description"]);


var myArray = [];
var newArray = [];





// -------Creating SecondWord

for(i in game){
	var newClass =  game[i];
	// $(newClass).css("display", "inline-block");
	var newLetter = "<div class= '"+  newClass +  " "+ "inlineClass"+ "'>"+ "-" + "</div>";
	$(".secondWord").append(newLetter);
//	$(".inlineClass").css("visibility", "hidden");
}

// ------- End of SecondWord

	var newArray = [];
	var j = 0;

$(".alphabets").on("click", function(event) {
	var letter = $(event.target).text();
	$(event.target).css("visibility", "hidden");

	if (game.includes(letter)){
	 var my = $(".newWord").text();


		newArray.push(letter);

			for (i in newArray){
			$("."+ letter).html(letter);
			console.log($("."+letter).text());
			if(game.includes(letter)){

				var theNewSecondClassLetter = "."+ letter;
				$(theNewSecondClassLetter).css("visibility", "visible");
			}
		}
			
	} else {
		$(bodyParts[j]).css("visibility", "visible");
		j++;
	}

		if (j === 8) {
			$(".head").css("transform", "rotate(75deg");
			endSound.play();
			showModal('open');
			$("#modalLost").modal("open");
			$("#answer").css("visibility", "visible");
			$("#answerDescription").css("visibility", "visible");
			$("#answer").text(game);
		}

		var newGame = game.split("");
		var newGameLength = 0;
		var emptyArray = []

		for (i in newGame){
			if(emptyArray.includes(newGame[i]) === false){
				emptyArray.push(newGame[i]);
				newGameLength++;
			}
		}

		console.log("The Array "+ newArray + "and length = "+ newArray.length);
		console.log("The new game "+ newGame + "and length = "+ newGame.length);
		console.log("Funny length = "+ newGameLength);
	
				if (newArray.length === newGameLength){
				console.log("HOORAY!!!  I've counted same length");
				winSound.play();
				showModal('open');
				$("#modalWon").modal("open");
		 	}
})



function showModal(){
	 		$('.modal').modal({
      dismissible: false, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '1%', // Starting top style attribute
      endingTop: '5%', // Ending top style attribute
    });

}


// ----- Start of the length of the place marks & length of the word -----

for (i = 0; i < game.split("").length; i++){
	var letterCount = game.split("").length;
console.log("start of game length "+ game.split("").length);
			//	$(".placeMarkers").append("_");
				$(".letterCount").text("("+ letterCount + ")");
}



// ---------- Start of Hint Toast --------------
/*
$(".hint").on("click", function(){
	var hint = database[rndNumber]["Description"];
	Materialize.toast(hint, 30000);
})
*/

// ------------- Start New Word -------------
$("button").on("click", function(){
	location.reload();

}) 
// ------------- End New Word
