import tw from "twin.macro";

import { HiddenBrLgXl, HiddenBr, HiddenBrSm, HiddenBrMd, HiddenBrLg, HiddenBrXl, HiddenBr_BreakPoint, HiddenBr_BreakPoint2, HiddenBr_BreakPoint3, HiddenBr_BreakPoint4, HightlightedText} from "assets/styles/TailwindComponents.jsx";

import teachImage1 from "assets/tbas-images/home/teach-1.png";
import teachImage2 from "assets/tbas-images/home/teach-2.png";

import highSchool from "assets/tbas-images/home/textbook-1.png";
import middleSchool from "assets/tbas-images/home/textbook-2.png";

import skill1 from "assets/tbas-images/home/HP_01.svg";
import skill2 from "assets/tbas-images/home/HP_02.svg";
import skill3 from "assets/tbas-images/home/HP_03.svg";

import teach1 from "assets/tbas-images/courses/teach-1.jpeg";
import teach2 from "assets/tbas-images/courses/teach-2.jpeg";
import walk from "assets/tbas-images/courses/walk.jpeg";
import stats from "assets/tbas-images/courses/stats.jpeg";
import inPerson1 from "assets/tbas-images/courses/inPerson-1.jpeg";
import inPerson2 from "assets/tbas-images/courses/inPerson-2.jpeg";
import teachers from "assets/tbas-images/courses/teachers.png";
import online from "assets/tbas-images/courses/online.jpeg";
import online2 from "assets/tbas-images/courses/online-2.jpeg";
import online3 from "assets/tbas-images/courses/online-3.jpeg";

import hand from "assets/tbas-images/courses/hand.jpeg";

// home page related information

export const header_footer = [
  {
    links: ["T-BASとは", "授業について", "講師紹介", "アクセス",  "お問い合わせ"],
    endpoints:["aboutTbas", "curriculum", "tutors", "access", "contact"],
    address: (<>〒194-0041 東京都町田市玉川学園 <HiddenBr_BreakPoint2/>2-11-22高橋ビル301</>),
    phone: "TEL/FAX：042-851-8680",
    hours: "電話受付時間：15:00-19:00",
    email: "メール：tbastamagawa@gmail.com"
  },
  {
    links: ["About T-BAS", "Curriculum", "Teachers", "Access", "Contact Us"],
    endpoints:["aboutTbas", "curriculum", "tutors", "access", "contact"],
    address: (<>〒194-0041 東京都町田市玉川学園 <HiddenBr_BreakPoint2/>2-11-22高橋ビル301</>),
    phone: "TEL/FAX：042-851-8680",
    hours: "Hours：15:00-19:00",
    email: "Email：tbastamagawa@gmail.com"
  }
]

export const home_hero = [
  {
    Heading:(
      <>
        T-BAS Plus
      </>
    ),
    Paragraph:(
      <>
        一人ひとりに丁寧に向き合う、<HiddenBr/>数学の個別指導塾
      </>
    )
  },
  {
    Heading:(
      <>
        For IB learning support,
        <br/>
        go to T-BAS.
      </>
    ),
    Paragraph:(
      <>
        A trusted tutoring center taught by <HiddenBr />instructors who have obtained the IB Diploma.
      </>
    )
  }
];

export const home_hero_desc = [
  {
    Heading:(
      <>
        T-BAS Plus
      </>
    ),
    Paragraph:(
      <>
        一人ひとりに丁寧に向き合う、数学の個別指導塾
      </>
    )
  },
  {
    Heading:(
      <>
        For IB learning support,
        <br/>
        go to T-BAS.
      </>
    ),
    Paragraph:(
      <>
        A trusted tutoring center taught by <HiddenBr />instructors who have obtained the IB Diploma.
      </>
    )
  }
];

export const home_concerns = [
  {
    Heading:[
      "玉川学園前駅徒歩1分！", 
      "中学生・高校生向けの", 
      "1対1の個別指導塾のT-Bas Plusへ！"
    ]
  },
  {
    Heading:[
      "玉川学園前駅徒歩1分！", 
      "中学生・高校生向けの", 
      "1対1の個別指導塾のT-Bas Plusへ！"
    ]
  }
];

export const home_trialLessons = [
  {
    Heading: [ "今なら", "60分3300円", "で", "体験レッスン受付中！" ],
    Subheading: "お気軽にご相談ください！",
    ActionButton: "電話: 0428-51-8680"
  },
  {
    Heading: [ "You can now do trial lessons for ", "3,300 yen!" ],
    Subheading: "Feel free to reach out！",
    ActionButton: "Contact Us!"
  }
];

export const home_features = [
  {
    Heading:[
      "玉川学園前駅徒歩1分！", 
      "中学生・高校生向けの", 
      "1対1の個別指導塾のT-Bas Plusへ！"
    ],
    Heading2: [ "数学に不安がある方も、基礎から見直したい方も、", "落ち着いて学べる環境で、じっくり着実に力をつけていきます。" ],
    ActionButton: "お問い合わせ・相談"
  },
  {
    Heading: [ "You can now do trial lessons for ", "3,300 yen!" ],
    Subheading: "Feel free to reach out！",
    ActionButton: "Contact Us!"
  }
];

export const home_keyAspects = [
  {
    Heading: "T-BAS Plusの特徴",
    KeyAspects:[
      {
        SubHeading: "一緒に「つまずき」を探して解決します",
        Description: (<>
          生徒が「どこで引っかかっているのか」を丁寧に見つけ、少しずつ理解を積み重ねていきます。
          <HiddenBrSm />
          「こんなこと聞いてもいいのかな？」
          <HiddenBrSm />
          そんな心配をしなくて良い、楽しく落ち着いた雰囲気を大切にしています。
        </>),
        ImageUrl: teachImage1
      },
      {
        SubHeading: "完全一対一で、じっくり学べる",
        Description: (<>
          生徒のペースに合わせて進めます。
          <HiddenBrSm />
          テンポを速めたり、ゆっくり確認したり、
          <HiddenBrSm />
          その日の理解度に合わせて柔軟に対応します。
        </>),
        ImageUrl: teachImage2
      }
    ]
  },
  {
    Heading: "Features of T-BAS",
    KeyAspects:[
      {
        SubHeading: "One-on-one lessons",
        Description: (<>
          We provide one-on-one lessons that cater to each individual, 
          maximizing their effectiveness and potential.
        </>),
        ImageUrl: skill1
      },
      {
        SubHeading: "In-person and online options available",
        Description: (<>
          Lessons are available in the classroom after school or on weekends.
          <HiddenBrSm />
          Online lessons at home are also offered.
        </>),
        ImageUrl: skill2
      },
      {
        SubHeading: "Three courses",
        Description: (<>
          We offer three courses: 
          <HiddenBrSm />
          Pre-MYP Course, MYP Course, and DP Course.
        </>),
        ImageUrl: skill3
      }
    ]
  }
];

export const startJourneyInfo = [
  {
    Heading: (<>玉川学園IBのMYP・DP<HiddenBr_BreakPoint3 />卒業生が指導</>),
    Description: (<>私たち講師陣は生徒1人1人に合った<HiddenBr_BreakPoint3 />サポートをご提供します。<br/>国内外大学の入試対策やエッセイ作成指導も<HiddenBr_BreakPoint3 />受付中です！</>),
    Button: "講師紹介"
  },
  {
    Heading: (<>Instructors are graduates of the <HiddenBr_BreakPoint3 />IB MYP and DP programs from Tamagawa Gakuen.</>),
    Description: (<>Our instructors provide support tailored to each student. <br/>We also offer assistance with university entrance exam preparation and essay writing for both domestic and international universities!</>),
    Button: "Instructor Introductions"
  }
];

export const courseInfo = [
  {
    Heading: "コース紹介",
    PriceHeading: "【月謝料金表】",
    PriceKeyNote: [
      "※週の時間数によってご料金が異なります",
      "※月４時間以上でお好きな回数や時間数で決められます",
      "※数学検定の指導も対応可能です"
    ],
    Courses:[
      {
        SubHeading: "中学生",
        Features: [
          "基礎力アップ",
          "学校フォロー",
          "テスト対策"
        ],
        ImageUrl: middleSchool,
        PriceTable: [
          {
            stdPriceHeading: "60分",
            stdPrice: "¥6,200"
          },
          {
            stdPriceHeading: "90分",
            stdPrice: "¥9,300"
          }
        ]
      },
      {
        SubHeading: "高校生",
        SubHeading2: "(文系、受験対策)",
        Features: [
          "基礎力アップ",
          "学校フォロー",
          "テスト対策"
        ],
        ImageUrl: highSchool,
        PriceTable: [
          {
            stdPriceHeading: "60分",
            stdPrice: "¥6,900"
          },
          {
            stdPriceHeading: "90分",
            stdPrice: "¥10,350"
          }
        ]
      },
      {
        Type: "detailed",
        SubHeading: "IB数学基礎力UP！レッスン",
        Intro: [
          "IBでは、探究や考察を重視した学びが行われます。",
          "生徒たちは、日々の課題やレポート、アセスメントに取り組みながら忙しく学んでいます。そのため、Mathに焦点を当てて反復練習を重ねる機会は多くありません。計算や式の扱い、関数の理解など、数学の土台となる部分に不安を抱えたまま先へ進んでしまいがちです。"
        ],
        Sections: [
          {
            Heading: "なぜ基礎力が大切なのでしょうか？",
            Paragraphs: [
              "IB数学では、単に答えを出すだけではなく、考察する力や数学的に表現する力、問題を分析する力も評価されます。そのため、多くの生徒が「考えること」に意識を向けます。",
              "しかし実際には、基礎的な計算や式の扱いに不安があると、その先の思考に進むことができません。IB数学で求められる力は、基礎力の上に積み重なっていくものです。Math AAやAIでより良い成果を目指す場合も、まず土台となる計算力や代数的な理解を整えることが大切です。",
              "このレッスンでは、学校で学ぶ内容を踏まえながら、日本の数学教育の良さでもある「基礎力の定着」に目を向け、IB数学を学ぶための土台づくりをお手伝いします。",
              "難しい問題に挑戦するためではなく、授業や課題に安心して取り組める基礎力を育てることが目的です。大事な専門用語については英語でも確認しますが、基本レッスンは日本語で行い、一人ひとりの理解度に合わせて進めます。",
              "分からなくなったところまで戻りながら、継続することで無理なく基礎を積み上げていきます。オリジナル教材を使用し、反復練習を通して「できることを増やす」ためのレッスンです。"
            ]
          }
        ],
        Recommendations: [
          "前に習ったことを忘れている",
          "基礎から見直したい",
          "計算に時間がかかる",
          "ミスが多い",
          "数学に苦手意識がある",
          "IB数学に自信を持って取り組みたい",
          "Math AA・AIでより良い成果を目指したい"
        ],
        ImageUrl: middleSchool,
        Details: [
          {
            Heading: "対象学年",
            Lines: ["IB生 MYP 7年生から10年生"]
          },
          {
            Heading: "開講時間",
            Lines: [
              "土曜日（90分）",
              "13:00〜14:30（1部）",
              "15:00〜16:30（2部）"
            ],
            Notes: [
              "各回 少人数（最大3名）",
              "1部または2部どちらかを選択",
              "少数定員制のため、満席となる場合があります"
            ]
          },
          {
            Heading: "レッスン形式",
            Lines: ["対面レッスン（最大3名までの少人数制）"]
          },
          {
            Heading: "受講料",
            Lines: ["月額：24,200円（週1回 / 90分）"]
          },
          {
            Heading: "入会金",
            Lines: ["11,000円"]
          },
          {
            Heading: "施設使用料",
            Lines: ["1,100円/月"]
          },
          {
            Heading: "教材費",
            Lines: ["無料（授業料に含む）"]
          },
          {
            Heading: "体験レッスン",
            Lines: ["3,300円"]
          }
        ]
      }
    ],
    Button1: (<>対面<HiddenBr/>レッスン</>),
    Button2: (<>オンライン<HiddenBr/>レッスン</>)
  },
  {
    Heading: "Course Introductions",
    Courses:[
      {
        SubHeading: "Pre-MYP",
        Features: [
          "Targeting 5th-grade students (entrance selection applies)",
          (<>
            Advance learning of MYP skills 
            <HiddenBrSm />
            starting from 6th grade.
          </>),
          (<>
            Limited to children who are 
            <HiddenBrSm />
            comfortable with their school learning.
          </>)
        ]
      },
      {
        SubHeading: "MYP",
        Features: [
          (<>
            Thorough instruction on 
            <HiddenBrSm />
            skills for improving grades.
          </>),
          "Comprehensive support",
          "Develop skills that are applicable in the DP (Diploma Programme)."
        ]
      },
      {
        SubHeading: "DP",
        Features: [
          "DP Learning & Life Support",
          "DP Exam Preparation Guidance",
          "support for EE (Extended Essay) and IA (Internal Assessment)",
          (<>
            University entrance exam advice and 
            <HiddenBrSm />
            guidance for application essays
          </>)
        ]
      }
    ],
    Button1: "In-person lessons",
    Button2: "Online lessons"
  }
];

export const testimonials = [
  {
    heading: "ご利用者の声",
    learnMore: "もっと見る",
    reviews: [
      {
        subHeading: "この塾にずっと通っていて本当に助かっております",
        description: "オープン当初から通わせていただいており、最初は正直、親の意向で通っておりましてもう3年になりますが、この塾にずっと通っていて本当に助かっております。今では本人も自ら行って先生に教わりたいという態度に変わって来ています。なかなか教科の先生には質問できなくても身近な塾の先生に気楽に質問できて、わからない事を恥じることもなく深く理解できるまで質問して解決していただいています。オンラインでも受けられますが、やはり対面というのは良いところですね。これからもどうぞよろしくお願いします。"
      },
      {
        subHeading: "知らないままだったら落第の道だったかもしれません",
        description: "大変お世話になりありがとうございました。先輩である先生方には、IBの実践的な知恵を教えていただき感謝しております。知らないままだったら落第の道だったかもしれません。塾長の適切なアドバイスにより救っていただき心より感謝いたします。指定校推薦という道を教えていただいたことも有り難く、その中で行きたい大学も見つけられたのは何よりでした。いろいろとご指導いただき本当にありがとうございました。"
      },
      {
        subHeading: "自信と安心に繋がっています",
        description: "いつもお世話になっております。IBのアセスメントは保護者でも理解することが難しいことが多々あり、T-BASのサポートには大変感謝しております。最近IBをご卒業された先輩方が生徒目線で指導して下さり、本人の自信と安心に繋がっております。宿題をサポート下さったり、試験前の復習、カリキュラムの予習などのご指導が特に助かっております。これからもどうぞよろしくお願い致します。"
      },
      {
        subHeading: "成績面も精神面も安定！",
        description: "️初めて先生にMathへの苦手意識の克服をお手伝いいただいてから、もうすぐ2年になります。途中、DP対策及びメンターとして、新しい先生にバトンタッチされてからも、成績面も精神面も安定し、何より保護者としてのハラハライライラが無くなりました。特にタイムマネージメントと、当事者意識を持って取り組むことが出来るようになり、先生方には大変感謝しております。先生という身近なrole modelに導いていただき、本人も受験やその先の学びについて具体的にイメージ出来るようになって来ていると思います。どうぞ最後までよろしくお願いいたします。"
      },
      {
        subHeading: "充実した学校生活になりました",
        description: "️7年生の手探りの状態よりT-BASのおかげで成績も上がり、充実した学校生活になったと思っております。塾長はじめ、担当してくださいました先生方に感謝申し上げます。今までの経験を活かして留学先でも頑張って欲しいと思っています！本当にありがとうございました。"
      },
      {
        subHeading: "担当の先生のご指導がマッチしています",
        description: "娘はまだ数回ですがとても良い感触を持たせて頂いているようで、感謝しております。担当の先生のご指導がマッチしているようです。当方としては、初回に成績表を見ながら親身になってカウンセリング下さった塾長が、入塾の大きな決め手となったと思います。今後も良い先生がたくさん継続や増員され、ますますご繁栄されますこと、切に願っております！"
      },
      {
        subHeading: "マンツーマンで取り組める環境がいい",
        description: "T-BASの学校の課題に合わせて担当の先生とマンツーマンで取り組める環境はとても良く、？を放置せずに確認出来る環境がある事に感謝しています！"
      },
      {
        subHeading: "成績が良くなった!",
        description: "夏休みも対応いただき感謝しております。熱心にご指導いただき、また会話も楽しかったと本人も言っておりました。お陰様でご指導いただいた教科は成績が良くなりまして本当に感謝です。"
      },
      {
        subHeading: "T-BASに行くのが楽しい!",
        description: "本日もお世話になりました。安心な環境と先生方のお陰で「T-BASに行くのが楽しい」と申しております。ありがとうございます。"
      },
      {
        subHeading: "成長を日々実感しています",
        description: "いつもご指導ありがとうございます。先生方のご指導のおかげで、勉強方法や、自分なりの意見を述べたりと成長を日々実感しております。大変ありがとうございます。夏休みもしっかり勉強したいと思いますので、宜しくお願いします。"
      },
      {
        subHeading: "授業がよく分かるようになった",
        description: "塾でお世話になり始め、授業がよく分かるようになった、とIB教育の学ぶ楽しさを知り充実した日々です。"
      },
      {
        subHeading: "進級への自信と意欲に直結しています",
        description: "今学期の成績はお陰さまで、Mathは努力が実り、力がつき、安定してきたようです。試験では不得意科目から脱しつつあるような好結果がでました。確実に進級への自信と意欲に直結しております。改めまして温かいお支えに感謝しております。"
      }
    ]
  },
  {
    heading: "Testimonials",
    learnMore: "See more",
    reviews: [
      {
        subHeading: "I have been attending this tutoring center for a long time, and it has really helped me.",
        description: "I have been attending since the school first opened, and honestly, at first, it was at my parents' insistence. It has been three years, and I have truly benefited from this school. Now, my child has changed their attitude and expresses a desire to go and learn from the teachers. Although it can be difficult to ask questions in front of subject teachers, my child can comfortably ask questions to the familiar teachers at this school without feeling ashamed of what they don't understand, allowing them to ask until they achieve a deep understanding. While online lessons are also available, in-person interaction is definitely beneficial. Thank you so much for your continued support."
      },
      {
        subHeading: "If I hadn't joined, I might have ended up failing.",
        description: "Thank you very much for all your help. I am grateful to the teachers, who are my seniors, for teaching me practical wisdom about the IB. If I had remained unaware, I might have ended up failing. I sincerely appreciate being saved by the principal’s appropriate advice. I am also thankful for being informed about the designated school recommendation pathway, which helped me find the university I want to attend. Thank you very much for all the guidance you provided."
      },
      {
        subHeading: "I have been able to gain confidence and reassurance.",
        description: "Thank you for your continued support. The IB assessments can often be difficult for parents to understand, and I am very grateful for T-BAS's assistance. Recently, seniors who have graduated from the IB program have been providing guidance from the students' perspective, which has contributed to my child's confidence and reassurance. The support with homework, review before exams, and preparation for the curriculum has been especially helpful. I look forward to your continued support."
      },
      {
        subHeading: "Stability in both academic performance and mental well-being!",
        description: "️It has been almost two years since I first received help from a teacher to overcome my difficulties with Math. Even after the transition to a new teacher who became my mentor for DP preparation, both my academic performance and mental state have stabilized, and most importantly, the anxiety and frustration I felt as a parent have disappeared. I am particularly grateful for the improvement in time management and their ability to engage with a sense of ownership. With the guidance of teachers who serve as close role models, I believe my child has become more capable of envisioning the entrance exams and further learning. Thank you for your continued support."
      },
      {
        subHeading: "My school life has become more fulfilling.",
        description: "️Thanks to T-BAS, I believe my grades have improved from the uncertain state I was in as a 7th grader, leading to a fulfilling school life. I would like to express my gratitude to the principal and all the teachers who have guided me. I hope to leverage my experiences and do well in my studies abroad! Thank you very much!"
      },
      {
        subHeading: "The guidance from the assigned teacher is a perfect match.",
        description: "My daughter has only had a few sessions, but she seems to have a very positive impression, and I am grateful for that. It seems that the guidance from her assigned teacher is a great fit. From my perspective, the principal's heartfelt counseling during our first meeting, where we reviewed her report card, was a major deciding factor in our choice to enroll. I sincerely hope that many excellent teachers will continue to come,and for T-BAS to thrive!"
      },
      {
        subHeading: "A one-on-one environment for learning is great.",
        description: "I am very grateful for the environment at T-BAS, where I can work one-on-one with my assigned teacher in accordance with the school's curriculum. It is a wonderful environment that allows me to address any questions without leaving them unresolved!"
      },
      {
        subHeading: "My grades have improved!",
        description: "I am grateful for the support provided during the summer vacation. My child mentioned that the instruction was enthusiastic and that they enjoyed the conversations as well. Thanks to your guidance, the subjects taught have seen an improvement in grades, and I truly appreciate it."
      },
      {
        subHeading: "Going to T-BAS is fun!",
        description: "Thank you for your support today as well. My child says, 'Going to T-BAS is fun,' thanks to the safe environment and the teachers. Thank you very much."
      },
      {
        subHeading: "I feel my growth every day.",
        description: "Thank you for your constant guidance. Thanks to the teachers' instruction, I am feeling my growth every day in terms of study methods and expressing my own opinions. I appreciate your support and I want to study diligently during the summer vacation as well!"
      },
      {
        subHeading: "I can understand the lessons better.",
        description: "Since I started receiving support at the tutoring center, I have come to understand the lessons better, and I've learned the joy of studying IB education, leading to fulfilling days."
      },
      {
        subHeading: "Attending T-BAS has directly increased my confidence and motivation for advancing to the next grade.",
        description: "Thanks to your support, my grades this semester have improved. In Math, my efforts have paid off, and I seem to be stabilizing. I have achieved good results in the exam, gradually overcoming my weak subjects. This has certainly translated into confidence and motivation for advancing to the next grade. Once again, I sincerely appreciate your warm support."
      }
    ]
  }
];

export const tutors_list = [
  {
    heading: "講師紹介",
    expHeading: "経験：",
    comHeading: "コメント：",
    parentHeading: "保護者の方へ：",
    tutors: [
      {
        name: "溝口講師",
        gender: "Female",
        experience: [
          "学習塾での講師経験",
          "家庭教師としての個別指導",
          "某通信教育の添削指導"
        ],
        subjects: [
          "Pre-MYP", "MYP", "DP"
        ],
        comments: (
          <>
          T-BAS Plus 代表の溝口です。50代・女性講師です。<br/>
          これまで、学習塾での講師経験、家庭教師としての個別指導、某通信教育の添削指導を通して、たくさんの生徒さんと向き合ってきました。
          一人ひとりのペースを大切にして、「分かる！」「出来る！」という気持ちを丁寧に積み重ねていく指導を心がけています。<br/><br/>
          数学に不安がある生徒さんも、基礎からゆっくり確認したい生徒さんも、安心して質問できる雰囲気づくりを大切にしています。
          落ち着いて学べる環境で、着実に理解を深めていくお手伝いができれば幸いです。
          </>
        ),
        parentComments: (
          <>
          T-BAS Plus は、じっくりと、着実に、理解を深められる場所を目指しています。<br/>
          「わからない」を一緒に解決して、ご家庭でも安心して見守れるような学習の流れを作ります。
          </>
        )
      }
    ]
  },
  {
    heading: "Instructor Introductions(partial publication)",
    eduHeading: "Background：",
    subHeading: "Subjects Taught:",
    comHeading: "Comments：",
    tutors: [
      {
        name: "Teacher _",
        gender: "Male",
        education: [
          "Sophia University, Faculty of Economics.",
          "Tamagawa IB graduate (IBDP obtained)"
        ],
        subjects: [
          "Pre-MYP", "MYP", "DP"
        ],
        comment: "I entered the IB course without being particularly good at English, but ultimately I was able to achieve a solid DP score. I hope to use this experience to help students in their IB lives. In my personal opinion, even if you struggle with English, you can achieve great results in the IB with effort and personal growth!"
      }
    ]
  }
];

export const tutors_acceptance = [
  {
    heading: "講師の大学合格実績",
    colleges: [
      "慶應義塾大学経済学部(PEARL)",
      "慶應義塾大学文学部",
      "慶應義塾大学総合政策学部(GIGAプログラム）",
      "早稲田大学国際教養学部",
      "早稲田大学社会科学部（TAISIプログラム）",
      "鹿児島大学医学部",      
      "上智大学国際教養学部",
      "上智大学経済学部",
      "上智大学法学部国際関係法学科",
      "上智大学総合グローバル学部",
      "上智大学外国語学部英語学科",
      "国際基督教大学",
      "立教大学異文化コミュニケーション学部",
      "立教大学GLAP",
      "立教大学法学部国際ビジネス法学科",
      "法政大学経済学部国際経済学科",
      "テンプル大学ジャパンキャンパス",
      "エディンバラ大学",
      "バーミンガム大学",
      "ダラム大学",
      "トロント大学",
      "マギル大学",
      "ブリティッシュコロンビア大学",
      "アルバータ大学",
      "ワシントン大学",
      "ニューヨーク大学",
      "南カリフォルニア大学",
      "カリフォルニア大学",
      "ハワイ大学",
      "クイーンズランド大学",
      "メルボルン大学",
      "オークランド大学",
      "グリフィス大学"
    ],
    closer: "他多数"
  },
  {
    heading: "University acceptance records of instructors",
    colleges: [
      "Keio University, Faculty of Economics (PEARL)",
      "Keio University, Faculty of Letters",
      "Keio University, Faculty of Policy Management ",
      "Waseda University, SILS",
      "Waseda University, SSS (TAISI Program)",
      "Kagoshima University, Faculty of Medicine",      
      "Sophia University, Faculty of Liberal Arts(FLA)",
      "Sophia University, Faculty of Economics",
      "Sophia University, Faculty of Law, Department of International Relations",
      "Sophia University, Faculty of Global Studies",
      "Sophia University, Faculty of Foreign Languages, Department of English",
      "International Christian University (ICU)",
      "Rikkyo University, Faculty of Intercultural Communication",
      "Rikkyo University, GLAP",
      "Rikkyo University, Faculty of Law, Department of International Business Law",
      "Hosei University, Faculty of Economics, Department of ,International Economics",
      "Temple University, Japan Campus",
      "University of Edinburgh",
      "University of Birmingham",
      "Durham University",
      "University of Toronto",
      "McGill University",
      "University of British Columbia",
      "University of Alberta",
      "University of Washington",
      "New York University",
      "University of Southern California",
      "University of California",
      "University of Hawaii",
      "University of Queensland",
      "University of Melbourne",
      "University of Auckland",
      "Griffith University"
    ],
    closer: "and more"
  }
]

// lessons
export const lessons = [
  {
    InPersonHeading: "授業内容"
  },
  {
    InPersonHeading: "In-Person Lessons"
  }
];

export const inPerson_WhySelect = [
  {
    Heading: "選ばれる理由",
    Reasons:[
      {
        SubHeading: (<>
          一緒に“つまずき”を
          <br />
          探して解決します
        </>),
        Description: "生徒が「どこで引っかかっているのか」を丁寧に見つけ、少しずつ理解を積み重ねていきます。「こんなこと聞いてもいいのかな？」そんな心配をしなくて良い、楽しく落ち着いた雰囲気を大切にしています",
        ImageUrl: teach1
      },
      {
        SubHeading: (<>
          完全1対1で、
          <br />
          じっくり学べる
        </>),
        Description: "生徒のペースに合わせて進めます。テンポを速めたり、ゆっくり確認したり、その日の理解度に合わせて柔軟に対応します。",
        ImageUrl: teach2
      },
      {
        SubHeading: (<>
          駅ちか！
          <br />
          学校帰りに
          <br />
          立ち寄れる
        </>),
        Description: "玉川学園前駅北口から徒歩１分！T-BASはお子様たちに安心で便利な落ち着いた学習環境を提供しています。",
        ImageUrl: walk
      },
      {
        SubHeading: (<>
          サポートが
          <br />
          すごい！
        </>),
        Description: "T-BAS Plus は、じっくりと、着実に、理解を深められる場所を目指しています。「わからない」を一緒に解決して、ご家庭でも安心して見守れるような学習の流れを作ります。",
        ImageUrl: inPerson2
      }
    ]
  },
  {
    Heading: "Six Reasons to Join T-BAS",
    Reasons:[
      {
        SubHeading: (<>
          A Perfect Tutoring Center for 
          <br />
          Tamagawa Gakuen IB Students
        </>),
        Description: "T-BAS is a cram school specializing in Tamagawa Gakuen IB. We have many excellent instructors who have graduated from Tamagawa Gakuen IB, enabling us to provide comprehensive support beyond just major subjects. We also have outstanding instructors who graduated from overseas IB programs and other IB schools, allowing us to offer a wide range of guidance.",
        ImageUrl: teach1
      },
      {
        SubHeading: (<>
          One-on-one 
          <br />
          in-person lessons
        </>),
        Description: "Nothing is better than one-on-one in-person lessons. At T-BAS, you can focus on your lessons in a well-equipped classroom, unlike in cafes, so I confidently recommend it.",
        ImageUrl: teach2
      },
      {
        SubHeading: (<>
          Conveniently located near the station!
          <br />
          Perfect for stopping by after school.
        </>),
        Description: "Just a one-minute walk from the North Exit of Tamagawa Gakuen-mae Station! T-BAS is the only place that can offer such a convenient and calm learning environment!",
        ImageUrl: walk
      },
      {
        SubHeading: (<>
          Being able to understand 
          <br />
          What once seemed difficult
          <br />
          Boosts motivation and learning process!
        </>),
        Description: "At T-BAS, we do lessons using both English and Japanese to fully support the students.we not only teach study techniques but also help IB students develop essential time management skills. We encourage students to invest time in creating high-quality assignments.",
        ImageUrl: inPerson1
      },
      {
        SubHeading: (<>
          The support is 
          <br />
          amazing!
        </>),
        Description: "T-BAS has a director, making it easy for both students and parents to consult about anything at any time. We provide support to ensure that students can learn confidently and enjoyably. The director guides the instructors to deliver high-quality lessons by fostering collaboration between parents, students, and teachers. Additionally, in the pre-MYP/MYP courses, parents can view lesson progress reports, giving them insight into their child's learning status for peace of mind.",
        ImageUrl: inPerson2
      },
      {
        SubHeading: "The instructors are amazing!",
        Description: "Most of the instructors at T-BAS attend prestigious universities such as Waseda, Keio, Sophia, ICU, Rikkyo, and the University of Toronto. Our instructors have high GPAs and impressive IBDP scores. They are well-versed in effective study methods, so be sure to learn their tips during lessons!",
        ImageUrl: teachers
      }
    ]
  }
];

export const online_WhySelect = [
  {
    Heading: "選ばれる６つの理由",
    Reasons:[
      {
        SubHeading: (<>
          玉川学園IB生に
          <br />
          ぴったりな塾
        </>),
        Description: "T-BASは玉川学園IBに特化した塾です。優秀な玉川学園IBを卒業した講師が沢山在籍しているので、主要科目の勉強だけでないトータルサポートが可能です。海外IBや他校IB卒の優秀な講師も在籍。幅広い指導の提供をしています。",
        ImageUrl: teach1
      },
      {
        SubHeading: (<>
          マンツーマン
          <br />
          レッスン
        </>),
        Description: "1:1で講師と対話しながらのレッスンなのでレッスン最後まで集中することが出来ます。お子様の理解度に合わせた丁寧な指導で成績アップを目指します。",
        ImageUrl: online2
      },
      {
        SubHeading: (<>
          オンライン
          <br />
          レッスン
        </>),
        Description: "自宅で気軽にレッスンが出来ます。家が遠かったり部活や習い事が毎日のようにある方には、負担が少なくコンスタントに学習を進めることが出来るのでお勧めの学習スタイルです。",
        ImageUrl: online
      },
      {
        SubHeading: (<>
          分からないことが
          <br />
          分かるようになって
          <br />
          やる気がアップ！
          
        
        </>),
        Description: "T-BASでは英語だけでなく日本語も使って分からないことを分かるまで丁寧にレッスンします。また、IB生に必要なタイムマネージメントの力をつけていきます。課題は時間をかけて質の高いものを作り上げるように意識を高めていきます。",
        ImageUrl: online3
      },
      {
        SubHeading: (<>
          サポートが
          <br />
          すごい！
        </>),
        Description: "T-BASは塾長がいるので、生徒も保護者も日頃から何でも気軽に相談することが出来ます。塾長は「保護者＆生徒＆講師」を連携させて質の高い授業を提供するように講師を導きます。また、レッスンの学習報告も閲覧できるのでお子様の様子が分かり保護者も安心です。",
        ImageUrl: hand
      },
      {
        SubHeading: "講師がすごい！",
        Description: "T-BASの講師はほとんどが早慶上智ICU立教やトロント大学など難関大学に通っています。高いGPAとIBDPハイスコアの成績優秀な講師が在籍しています。彼らは成績を取る方法を熟知しているので是非レッスンでコツを掴んで下さい！",
        ImageUrl: teachers
      }
    ]
  },
  {
    Heading: "Six Reasons to Join T-BAS",
    Reasons:[
      {
        SubHeading: (<>
          A Perfect Tutoring Center for 
          <br />
          Tamagawa Gakuen IB Students
        </>),
        Description: "T-BAS is a cram school specializing in Tamagawa Gakuen IB. We have many excellent instructors who have graduated from Tamagawa Gakuen IB, enabling us to provide comprehensive support beyond just major subjects. We also have outstanding instructors who graduated from overseas IB programs and other IB schools, allowing us to offer a wide range of guidance.",
        ImageUrl: teach1
      },
      {
        SubHeading: (<>
          One-on-one
          <br />
          lessons
        </>),
        Description: "With one-on-one lessons, students can interact with the instructor, allowing them to maintain focus throughout the session. We provide careful instruction tailored to each child's understanding, aiming for improved academic performance.",
        ImageUrl: online2
      },
      {
        SubHeading: (<>
          Online
          <br />
          lessons
        </>),
        Description: "You can easily have lessons from the comfort of your home. For those who live far away or have daily extracurricular activities, this learning style is recommended as it minimizes the burden and allows for consistent progress in studies.",
        ImageUrl: online
      },
      {
        SubHeading: (<>
          Being able to understand 
          <br />
          What once seemed difficult
          <br />
          Boosts motivation and learning process!
        </>),
        Description: "At T-BAS, we do lessons using both English and Japanese to fully support the students.We not only teach study techniques but also help IB students develop essential time management skills. We encourage students to invest time in creating high-quality assignments.",
        ImageUrl: online3
      },
      {
        SubHeading: (<>
          The support is 
          <br />
          amazing!
        </>),
        Description: "T-BAS has a director, making it easy for both students and parents to consult about anything at any time. We provide support to ensure that students can learn confidently and enjoyably. The director guides the instructors to deliver high-quality lessons by fostering collaboration between parents, students, and teachers. Additionally, in the pre-MYP/MYP courses, parents can view lesson progress reports, giving them insight into their child's learning status for peace of mind.",
        ImageUrl: hand
      },
      {
        SubHeading: "The instructors are amazing!",
        Description: "Most of the instructors at T-BAS attend prestigious universities such as Waseda, Keio, Sophia, ICU, Rikkyo, and the University of Toronto. Our instructors have high GPAs and impressive IBDP scores. They are well-versed in effective study methods, so be sure to learn their tips during lessons!",
        ImageUrl: teachers
      }
    ]
  }
];

// access info
export const access = [
  {
    heading: "アクセス",
    subHeading: (<>
      T-BAS玉川学園
      <br />
      〒194-0041 東京都町田市玉川学園2-11-22高橋ビル301
    </>),
    instructions:[
      (<>
        玉川学園前駅北口の階段を下りて目の前の信号を渡ります。
        <br />
        （スーパー三和側の出口です）
      </>),
      (<>
        左に少し進むと右手に1階が床屋さんの建物
        <br />
        （高橋ビル）があります。
      </>),
      (<>
        3階301号室がT-BAS玉川学園です。（駅から徒歩1分です）
      </>)
    ]
  },
  {
    heading: "Access",
    subHeading: (<>
      T-BAS玉川学園
      <br />
      〒194-0041 東京都町田市玉川学園2-11-22高橋ビル301
    </>),
    instructions:[
      (<>
        Descend the stairs from the North Exit of Tamagawa Gakuen-mae Station and cross the traffic light right in front of you.
        <br />
        （This is the exit by the Sanwa supermarket）
      </>),
      (<>
        If you walk a little to the left, you'll see a building with a barber shop on the first floor to your right.
        <br />
        （This is the Takahashi Building）
      </>),
      (<>
        T-BAS Tamagawa Gakuen is located in Room 301 on the 3rd floor of the Takahashi Building.
        <br />
        （It’s a 1-minute walk from the station.）
      </>)
    ]
  }
]

// faq
export const faqInfo = [
  {
    heading: "よくあるご質問",
    subHeaders:[
      "レッスンについて",
      "料金について",
      "入塾について"
    ],
    lesson:[
      {
        question: "体験レッスンはやっていますか？",
        answer: "はい、1時間3300円で受講できます。公式LINE「T-BAS玉川学園」から簡単にお申込みが出来ますのでご利用ください。"
      },
      {
        question: "レッスン形態について教えてください。",
        answer: (<>1:1の完全マンツーマンレッスンです。講師は担当制です。<HiddenBrSm/>
                対面レッスンとオンラインレッスンがあります。<HiddenBrSm/>
                毎週のレッスン回数は週1回以上お好きな回数に出来ます。<HiddenBrSm/>
                1回のレッスン時間は1時間以上お好きな時間に出来ます。
                </>)
      },
      {
        question: "振替はできますか？",
        answer: (<>前日夜7時までにご連絡いただければ後日振替が可能です。<HiddenBrSm/>
                振替はオンラインレッスンになる場合や別の講師が担当する場合があります。<HiddenBrSm/>
                振替期限は学年末の3月末迄とさせて頂きます。
                </>)
      },
      {
        question: "どのような先生が教えるのでしょうか？",
        answer: (<>IBコースは全員がIBDP取得済みの講師です。<HiddenBrSm/>
                その中でも成績上位の玉川学園IB卒の講師や他校IB卒の講師が多く在籍しています。<HiddenBrSm/>
                さらにT-BASの講師は塾長の指導教育を受けていますので質の高いレッスンをご提供します。
                </>)
      },
      {
        question: "塾に行けない日はオンラインレッスンに変更できますか？",
        answer: "はい、ご連絡頂ければいつでも変更可能です。差額分はご返金できませんのでご了承ください。"
      },
      {
        question: "振替が溜まってしまっているのですが・・・",
        answer: "夏休みや春休みなど学校がお休みの時期に集中レッスンも出来ますのでご安心下さい。"
      }
    ],
    price:[
      {
        question: "体験レッスンはいくらでしょうか？",
        answer: "対面レッスン・オンラインレッスン、どちらも1時間3300円になります。"
      },
      {
        question: "授業料はいくらでしょうか？",
        answer: "今現在の基本料金は以下の通りです。",

        // add code for table
        inPersonTable: {
          heading: (<>対面<HiddenBr/>レッスン</>),
          keyNote: [
            "※施設使用料1100円/月を含みます",
            "※週の時間数によってご料金が異なります",
            "※週３h以上の場合は割引あり"
          ],
          priceSuffix: "円/月",
          courses:[
            {
              heading: "Pre-MYP",
              stdPriceHeading: "週1時間の場合",
              stdPrice: "31900",
              // dealPriceHeading: "週3時間以上の場合",
              // dealPrice: "7150"
            },
            {
              heading: "MYP",
              stdPriceHeading: "週1時間の場合",
              stdPrice: "31900",
              // dealPriceHeading: "週3時間以上の場合",
              // dealPrice: "7150"
            },
            {
              heading: "DP",
              stdPriceHeading: "週1時間の場合",
              stdPrice: "34100",
              // dealPriceHeading: "週3時間以上の場合",
              // dealPrice: "8140"
            }
          ]
        },
        onlineTable: {
          heading: (<>オンライン<HiddenBr/>レッスン</>),
          keyNote: [
            "※週の時間数によってご料金が異なります"
          ],
          priceSuffix: "円/月",
          courses:[
            {
              heading: "MYP",
              stdPriceHeading: "週1時間の場合",
              stdPrice: "26400"
            },
            {
              heading: "DP",
              stdPriceHeading: "週1時間の場合",
              stdPrice: "26400"
            }
          ]
        }
      },
      {
        question: "対面レッスンは授業料と施設使用料の他に追加料金はありますか",
        answer: (<>ありません。T-BASは講師の交通費やカフェ代もかからないので<HiddenBrSm/>
                他よりも安く駅ちかで対面レッスンが受講できる塾です。
                </>)
      },
      {
        question: "日頃の相談は料金がかかりますか？",
        answer: (<>塾長との相談は一切料金はかかりません。気軽にご相談ください。<HiddenBrSm/>
                講師によるエッセイ対策などは授業料と同じ料金を頂きます。
                </>)
      },
      {
        question: "授業料の支払い方法は？",
        answer: (<>毎月お振込みでお願いしております。<HiddenBrSm/>
          前月末か当月初めにお振込みのご連絡をさせて頂きます。
          </>)
      }
    ],
    join:[
      {
        question: "入塾テストはありますか？",
        answer: (<>プレMYPコースは入塾選抜があります。<HiddenBrSm/>
                入塾選抜はテストはありませんが、学校の成績や英語力から判断します。
                </>)
      },
      {
        question: "入塾までの流れを教えて下さい。",
        answer: (<>まずは公式LINE「T-BAS玉川学園」から又はお電話かメールでご相談下さい。<HiddenBrSm/>
          ご希望であれば、体験レッスン(1時間3300円)や塾長との面談(無料)ができますのでご利用下さい。<HiddenBrSm/>
          その後、レッスン日時と講師が決まり次第レッスン開始になります。
          </>)
      },
      {
        question: "入会金はいくらでしょうか？",
        answer: "現在、入会金は0円です。"
      }
    ]
  },
  {
    heading: "FAQs",
    subHeaders:[
      "About Lessons",
      "About Pricing",
      "About Enrollment"
    ],
    lesson:[
      {
        question: "Do you offer trial lessons?",
        answer: "Yes, you can take a trial lesson for 3,300 yen per hour.You can easily apply through the official Line「T-BAS玉川学園」account."
      },
      {
        question: "Please tell me about the lesson formats.",
        answer: (<>It’s a complete one-on-one lesson format. Each instructor is assigned to a specific student.<HiddenBrSm/>
                We offer both in-person and online lessons.<HiddenBrSm/>
                You can schedule lessons at least once a week, and you can choose the frequency that suits you best.<HiddenBrSm/>
                The duration of each lesson can be more than one hour, and you can choose the time that works best for you.
                </>)
      },
      {
        question: "Can I reschedule lessons?",
        answer: (<>If you contact us by 7 PM the night before, you can reschedule for a later date.<HiddenBrSm/>
                Rescheduled lessons may be conducted as online lessons or may involve a different instructor.<HiddenBrSm/>
                The rescheduling deadline is set for the end of March at the end of the school year.
                </>)
      },
      {
        question: "What kind of teachers will be teaching?",
        answer: (<>Every instructor teaching the Ib course have obtained the IB diploma.<HiddenBrSm/>
                Among them, many instructors are top-performing graduates from Tamagawa Gakuen IB　and other school IB.<HiddenBrSm/>
                Furthermore, T-BAS instructors receive guidance and training from the director, ensuring high-quality lessons.
                </>)
      },
      {
        question: "Can I switch to online lessons on days when I can't go to the cram school?",
        answer: "Yes, you can change to online lessons at any time if you contact us. Please note that we cannot refund the difference in fees."
      },
      {
        question: "I have accumulated rescheduled lessons...",
        answer: "You can also have intensive lessons during school breaks, such as summer and spring vacations, so please rest assured."
      }
    ],
    price:[
      {
        question: "How much is the trial lesson?",
        answer: "Both in-person lessons and online lessons are 3,300 yen for one hour."
      },
      {
        question: "How much is the tuition fee?",
        answer: "The current base fees are as follows.",

        // add code for table
        inPersonTable: {
          heading: "In-Person Lessons",
          keyNote: [
            "※The facility usage fee of 1,100 yen is included",
            "※Rates vary depending on the number of hours per week",
            "※Discounted rates apply for 3h or more per week"
          ],
          priceSuffix: "Yen / month",
          courses:[
            {
              heading: "Pre-MYP",
              stdPriceHeading: "1 hour per week",
              stdPrice: "31900",
              // dealPriceHeading: "For 3 hours or more per week",
              // dealPrice: "7150"
            },
            {
              heading: "MYP",
              stdPriceHeading: "1 hour per week",
              stdPrice: "31900",
              // dealPriceHeading: "For 3 hours or more per week",
              // dealPrice: "7150"
            },
            {
              heading: "DP",
              stdPriceHeading: "1 hour per week",
              stdPrice: "34100",
              // dealPriceHeading: "For 3 hours or more per week",
              // dealPrice: "8140"
            }
          ]
        },
        onlineTable: {
          heading: (<>Online<HiddenBr/>Lessons</>),
          priceSuffix: "Yen / month",
          keyNote: [
            "※Rates vary depending on the number of hours per week"
          ],
          courses:[
            {
              heading: "MYP",
              stdPriceHeading: "1 hour per week",
              stdPrice: "26400"
            },
            {
              heading: "DP",
              stdPriceHeading: "1 hour per week",
              stdPrice: "26400"
            }
          ]
        }
      },
      {
        question: "Are there any additional fees for in-person lessons besides the tuition and facility usage fee?",
        answer: (<>There are none. T-BAS does not incur transportation costs for the instructor or café expenses, <HiddenBrSm/>
                making it a cost-effective tutoring service where you can take in-person lessons at a location close to the station for a better deal.
                </>)
      },
      {
        question: "Are there any fees for regular consultations?",
        answer: (<>Consultations with the director of the tutoring center are completely free of charge. Please feel free to reach out with any questions. <HiddenBrSm/>
                However, essay preparation and other services provided by instructors will incur the same fees as the regular tuition.
                </>)
      },
      {
        question: "What are the payment methods for tuition fees?",
        answer: (<> We ask that payments be made via bank transfer each month. <HiddenBrSm/>
         We will notify you at the end of the previous month or at the beginning of the current month for the transfer.
          </>)
      }
    ],
    join:[
      {
        question: "Is there an entrance exam?",
        answer: (<>The Pre-MYP course has an admission selection process. <HiddenBrSm/>
                There is no test, but we evaluate based on school grades and English proficiency.
                </>)
      },
      {
        question: "Please tell me the process for enrollment.",
        answer: (<>First, please let us know your requests by our official LINE account「T-BAS玉川学園」, or by phone or email. <HiddenBrSm/>
          If you wish, you can take a trial lesson (1 hour for 3,300 yen) or have a meeting with the director (free of charge).<HiddenBrSm/>
          After that, lessons will start as soon as the schedule and instructor are determined.
          </>)
      },
      {
        question: "How much is the enrollment fee?",
        answer: "Currently, the enrollment fee is 0 yen."
      }
    ]
  }
]

export const contactUsForm = [
  {
    heading: "お問い合わせ",
    required: "必須",
    send: "送信",
    successResponse: "お問い合わせありがとうございます！",
    errorResponse: "フォルムが送信されませんでした。もう一度お願いします！",
    entryForms: [
      {
        entry: "名前（生徒）",
        example: "例：山田太郎"
      },
      {
        entry: "フリガナ",
        example: "例：ヤマダタロウ"
      },
      {
        entry: "電話番号",
        example: "例：000-0000-0000"
      },
      {
        entry: "メールアドレス",
        example: "例：user@example.jp"
      },
      {
        entry: "学校名",
        example: "例：T-BAS玉川学園"
      },
      {
        entry: "科目",
        example: "選択してください",
        options: [
          "Pre-MYP", "MYP", "DP"
        ]
      },
      {
        entry: "学年",
        example: "例：６年生"
      },
      {
        entry: "お問い合わせ種別",
        example: "選択してください",
        options: [
          "レッスンについて",
          "料金について",
          "入塾について"
        ]
      },
      {
        entry: "お問い合わせ内容",
        example: "現在の成績・相談内容"
      }
    ]
  },
  {
    heading: "Contact Us",
    required: "Required",
    send: "Send",
    successResponse: "Thank you for your inquiry!",
    errorResponse: "The form was not sent. Please try again!",
    entryForms: [
      {
        entry: "Name (Student)",
        example: "Example: Taro Yamada"
      },
      {
        entry: "Furigana (pronunciation guide)",
        example: "Example: Taro Yamada"
      },
      {
        entry: "Phone Number",
        example: "Example: 000-0000-0000"
      },
      {
        entry: "Email Address",
        example: "Example: user@example.jp"
      },
      {
        entry: "School name",
        example: "Example: T-BAS玉川学園"
      },
      {
        entry: "Subject",
        example: "Please select.",
        options: [
          "Pre-MYP", "MYP", "DP"
        ]
      },
      {
        entry: "Grade level",
        example: "Example: ６年生"
      },
      {
        entry: "Type of inquiry.",
        example: "Please select.",
        options: [
          "About lessons.",
          "About pricing",
          "About enrollment"
        ]
      },
      {
        entry: "Inquiry details.",
        example: "Current grades / consultation details."
      }
    ]
  }
]

export const applyForm = [
  {
    heading: "お問い合わせ",
    subHeading: "こちらは「T-BAS玉川学園講師募集」お問い合わせフォームです。仕事内容や勤務時間などなどお気軽にお問い合わせください。",
    flowHeading: "★公式LINE「T-BAS講師募集」から応募をお願い致します",
    flowSubHeading: "講師応募から採用までの流れ：",
    flow: [
      (<>公式LINEから<HiddenBr_BreakPoint4/>申込み</>),
      (<>T-BASから<HiddenBr_BreakPoint4/>LINEにて返信</>),
      "面接",
      "レッスン開始"
    ],
    teacherHeading: "⭐︎こんな方にオススメ：",
    teacherBullets: [
      "教えることが好きな方",
      "英語を活かして働きたい方",
      "IBでの知識や経験を活かして働きたい方",
      "IB DPを取得した方"
    ],
    lineHeading: "⭐︎T-BAS公式LINEへの３つの追加方法：",
    lineBullets: [
      ["LINEの友達追加から","「T-BAS玉川学園」","で検索して追加"],
      "右のQRコードから追加",
      "右のLINEアイコンをタップして追加"
    ],
    keyPoints: [
      "※ 担当学年（MYP・DP生）や担当科目を選べます。",
      "※ 遠方にお住まいの方はオンラインでのレッスンも可能です。"
    ]
  },
  {
    heading: "Contact Us",
    subHeading: "This is the 「T-BAS Tamagawa Gakuen, Teacher Recruitment」 inquiry form. Please feel free to inquire about job descriptions, working hours, etc.",
    flowHeading: "★Please apply through the official LINE 「T-BAS Instructor Recruitment」",
    flowSubHeading: "Steps from teacher application to employment：",
    flow: [
      "Apply via the official LINE",
      (<>Message T-BAS on LINE</>),
      "Interview",
      "Begin teaching"
    ],
    teacherHeading: "⭐︎Recommended for：",
    teacherBullets: [
      "People who love to teach",
      "Those who want to work using English",
      "Those who want to leverage their knowledge and experience in IB",
      "Those who have obtained the IB DP"
    ],
    lineHeading: "⭐︎3 ways to add to the official T-BAS LINE：",
    lineBullets: [
      ["From Add Friend on LINE, search for","「T-BAS玉川学園」","and Add"],
      "Add from QR code on the right",
      "Tap the LINE icon on the right to add"
    ],
    keyPoints: [
      "※ You can choose the grade level (MYP and DP students) and subjects you are in charge of.",
      "※ Online lessons are also available for those living far away."
    ]
  }
]

export const contactForm = [
  {
    heading: "お問い合わせ",
    subHeading: (<>こちらはT-BAS玉川学園のお問い合わせフォームです。体験レッスン/入塾相談/その他、IB（国際バカロレア）に関するご質問などお気軽にお問い合わせください。</>),
    flowHeading: "★T-BAS公式LINEでのお問い合わせ後の流れ",
    flowSubHeading: "体験レッスン・入塾相談・その他でのお申込みの場合：",
    flow: [
      (<>公式LINEから<HiddenBr_BreakPoint4/>申込み</>),
      "体験レッスン申込み",
      "入塾相談",
      (<>T-BASから<HiddenBr_BreakPoint4/>LINEにて返信</>),
      "ご予約"
    ],
    lineHeading: "⭐︎T-BAS公式LINEへの３つの追加方法：",
    lineBullets: [
      ["LINEの友達追加から","「T-BAS玉川学園」","で検索して追加"],
      "右のQRコードから追加",
      "右のLINEアイコンをタップして追加"
    ],
    keyPoints: [
      "※ 体験レッスンのご料金：3,300円（１時間：内10分〜15分は学習相談＋学習報告）",
      "※ 対面（推奨）またはオンラインレッスン",
      "※ ご記入の内容によって、より詳しくお話を伺うために当塾からお電話やLINEを差し上げる場合がございますこと、予めご了承ください。"
    ]
  },
  {
    heading: "Contact Us",
    subHeading: "This is the inquiry form for T-BAS Tamagawa Gakuen. Please feel free to contact us for trial lesson/admission consultation/other questions about IB (International Baccalaureate).",
    flowHeading: "★Flow of inquiry after making an inquiry on the official T-BAS LINE",
    flowSubHeading: "For trial lesson, admission consultation, and other applications：",
    flow: [
      "Apply via the official LINE",
      "Apply for Trial Lesson",
      "Consult to join T-BAS",
      "Message T-BAS on LINE",
      "Book Lesson"
    ],
    lineHeading: "⭐︎3 ways to add to the official T-BAS LINE：",
    lineBullets: [
      ["From Add Friend on LINE, search for","「T-BAS玉川学園」","and Add"],
      "Add from QR code on the right",
      "Tap the LINE icon on the right to add"
    ],
    keyPoints: [
      "※ Fee for trial lesson: 3,300 yen (1 hour, of which 10-15 minutes is for study consultation + study report)",
      "※ Face-to-face (recommended) or online lessons",
      "※ Please understand that depending on the information you provide, we may call you or drop you a line to discuss your request in more detail."
    ]
  }
]

export const aboutUs = [
  {
    heading: "T-BASとは",
    subHeading: [
      "T", "amagawa",
      "B", "est",
      "A", "fter",
      "S", "chool"
    ],
    textHeading: (
      <>
      T-BAS玉川学園は、子供達に玉川学園の地で
      <HiddenBrSm/>
      最高の放課後を提供したいという思いを込めた塾です。
      </>
    ),
    textClosingQuote: (
      <>
      T-BAS玉川学園
      <br/>
      塾長　溝口
      </>
    ),
    textDescription: (
      <>
        現在、国内では国際バカロレア認定校が少しずつ増えてきています。 IBは長期的な継続学習が何よりも大切です。毎日の学習をきちんと理解しながらコツコツと積み重ねていくことで、 やがて英語力も含めたDP試験に対応できる大きな力がつきます。そして、学校の成績を出来るだけ高くキープすればするほど大学の推薦入試は有利になります。 また、DPでは理系・文系の両方から６科目を選択する必要があるため、低学年の頃から不得意な科目を作らないようにすることも大切です。
        <br/><br/>
        T-BASのIBコースのチューター達はIBディプロマを高い点数で取得し、国内や国外の大学受験も成功させています。 IBDPを取得した彼らにしか出来ないサポートが沢山あります。勉強の仕方が分からない、 毎日の学習をしっかり定着させたい、親が教えられず困っている、先取り学習をしたい、DP試験や大学受験対策をしたい、 などなどお困りの事はないでしょうか？お1人お1人のご要望に合ったレッスンをご提案させて頂きますのでどうぞお気軽にご相談下さい。
        <br/><br/>
        また、一般クラス生のための数学フォローアップコースも併設しました。私は長年に渡る塾講師や某通信教育での数学指導の経験を活かして、 数学で困っているお子様のお力になりたいと思っています。他にも頼もしいチューター達がおりますので、数学が苦手な方や学校の勉強を強化したい方など、基礎力をしっかり着けて自信を持って学習が出来るようにサポートさせて頂きます。
        <br/><br/>
        小さな塾ですが皆様を心よりお待ちしております。
      </>
    )
  },
  {
    heading: "What is T-BAS?",
    subHeading: [
      "T", "amagawa",
      "B", "est",
      "A", "fter",
      "S", "chool"
    ],
    textClosingQuote: (
      <>
      T-BAS Tamagawa Gakuen
      <br/>
      Director: Mizoguchi
      </>
    ),
    textHeading:(
      <>
      T-BAS Tamagawa Gakuen is a tutoring center dedicated to providing 
      <HiddenBrSm/>
      children with the best after-school experience at Tamagawa Gakuen
      </>
    ),
    textDescription:(
      <>
      Currently, the number of International Baccalaureate (IB) accredited schools is gradually increasing in Japan. The IB emphasizes the importance of long-term continuous learning. By thoroughly understanding daily studies and gradually building upon them, students can develop strong skills that will eventually prepare them for the DP exams, including English proficiency. Additionally, maintaining high grades in school will favorably impact university recommendation admissions. In the DP program, students must select six subjects from both the sciences and humanities, so it is crucial to overcome the weaknesses in any subjects from a young age.
      <br/><br/>
      The tutors in T-BAS's IB course have achieved high scores on the IB Diploma and have successfully gained admission to universities both domestically and internationally. They offer unique support that only those who have obtained the IBDP can provide. If you're unsure how to study, want to solidify daily learning, are facing challenges because parents cannot teach, wish to get ahead in studies, or need assistance preparing for the DP exams or university entrance exams, please do not hesitate to reach out. We will propose lessons tailored to each individual's needs.
      <br/><br/>
      We also have a math follow-up course for general class students. Drawing on my extensive experience as a tutor and in mathematics instruction at a certain correspondence education program, I aim to support children who struggle with math. With the help of other capable tutors, we will assist those who find math challenging or wish to strengthen their school studies, ensuring they build a solid foundation and gain confidence in their learning.
      <br/><br/>
      Although we are a small tutoring center, we sincerely look forward to welcoming everyone.
      </>
    )
  }
]
