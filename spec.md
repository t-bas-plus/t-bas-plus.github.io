📄 GitHub Copilot Modification Spec — T-BAS Plus Website
🎯 Goal
Modify the existing React application to create a website for a tutoring company called T-BAS Plus.
The current app defines 10 pages via routes.
Reduce this to 5 pages only, update routing, navigation, and page content accordingly.
Do not introduce new frameworks or major refactors.
Reuse existing components and layout styles where possible.

🧭 Pages & Routes
Replace the existing pages with exactly these 5 routes:
Page Name	Route
Home	/
Course Intro	/courses
Instructors	/instructors
Access	/access
Contact Us	/contact

Instructions
Remove unused routes and page components
Update navigation/menu to reflect only these 5 pages
Ensure all links point to valid routes
Keep routing style consistent with the existing app (e.g. React Router)

🧱 Page Content (Japanese – use verbatim)
🏠 Home (/)
T-BAS Plus
一人ひとりに丁寧に向き合う、数学の個別指導塾
玉川学園前駅徒歩１分にある、
中学生・高校生向けの1対1の個別指導塾です。
数学に不安がある方も、基礎から見直したい方も、
落ち着いて学べる環境で、じっくり着実に力をつけていきます。

✨ T-BAS Plus の特徴
◆1．一緒に“つまずき”を探して解決します
生徒が「どこで引っかかっているのか」を丁寧に見つけ、
少しずつ理解を積み重ねていきます。
「こんなこと聞いてもいいのかな？」
そんな心配をしなくて良い、楽しく落ち着いた雰囲気を大切にしています。
◆2．完全1対1で、じっくり学べる
生徒のペースに合わせて進めます。
テンポを速めたり、ゆっくり確認したり、
その日の理解度に合わせて柔軟に対応します。

📘 Course Intro (/courses)
コース紹介
● 中学生
基礎力アップ・学校フォロー・テスト対策
● 高校生（文系）
基礎力アップ・学校フォロー・テスト対策
💴 料金
【月謝料金表】
60分	90分
中学生	¥6,200	¥9,300
文系高校生	¥6,900	¥10,350
高校受験対策	¥6,900	¥10,350
＊施設使用料1100円が別途かかります
＊月４時間以上でお好きな回数・時間数で決められます
＊数学検定の指導も対応可能です

👩‍🏫 Instructors (/instructors)
講師紹介
T-BAS Plus 代表の溝口です。
50代・女性講師です。
これまで、
学習塾での講師経験
家庭教師としての個別指導
某通信教育の添削指導
を通して、たくさんの生徒さんと向き合ってきました。
一人ひとりのペースを大切にして、
「分かる！」「出来る！」という気持ちを
丁寧に積み重ねていく指導を心がけています。
数学に不安がある生徒さんも、
基礎からゆっくり確認したい生徒さんも、
安心して質問できる雰囲気づくりを大切にしています。

📍 Access (/access)
T-BAS と同じアクセス
※詳細は別途記載予定
(Keep the same content as the access page currently)

📞 Contact Us (/contact)
お問い合わせ
体験授業（60分 3,300円）も行っています。
どうぞお気軽にご相談ください。
◎ 体験授業申込み＆ご相談窓口
電話：0428-51-8680
受付時間：平日 15:00–21:00

🧩 Technical Constraints
Modify existing React files only
Do not introduce new page types unless necessary
Keep styling consistent with the current template
Use semantic HTML where possible
No placeholder English text
Japanese text must not be paraphrased

✅ Output Expectations
After changes:
App builds successfully
Only 5 routes exist
Navigation reflects the new structure
Content matches the spec exactly
No unused pages/components remain
