(function() {
  'use strict';
  var lastId = 0;
  var taskWrapper = document.getElementById("task_wrapper");
  var btnSave = document.getElementById("save_task");
  var removeIcon;
  var updateIcon;
  var taskList;

  // Initialize taskList 
  // Add event to save button
  // Render the list

  function init() {

    if (!!(window.localStorage.getItem('taskList'))) {
	let taskList0 = [
	{"taskId":0,"taskDes":"<a href='https://tamil.oneindia.com/' target='_blank' >tamil.oneindia.com</a>","taskState":"1"},
	{"taskId":1,"taskDes":"<a href='https://freshbusinesssolutions.blogspot.com/2021/10/news.html' target='_blank' >freshbusinesssolutions</a>","taskState":"1"},
	{"taskId":2,"taskDes":"<a href='https://www.youtube.com/channel/UC14aFPpH4jF3FfRQZojCfeg/videos' target='_blank' >words of wisdom</a>","taskState":"1"},
	
	]
     let taskList1 = JSON.parse(window.localStorage.getItem('taskList'));
	 
	 //Concat 
	  taskList = taskList0.concat(taskList1);
	  console.log("taskList 1234567", taskList)
    } else {
      taskList = [
	  
	  	{"taskId":0,"taskDes":"<a href='https://tamil.oneindia.com/' target='_blank' >tamil.oneindia.com</a>","taskState":"1"},
	{"taskId":1,"taskDes":"<a href='https://freshbusinesssolutions.blogspot.com/2021/10/news.html' target='_blank' >freshbusinesssolutions</a>","taskState":"1"},
	
	{"taskId":1,"taskDes":"<a href='https://22893.live.streamtheworld.com/OLI968FMAAC.aac?dist=radiosingapore' target='_blank' >Oli singapore</a>","taskState":"1"},
	
	
	{"taskId":1,"taskDes":"<a href='file:///C:/Users/jmkanna/Documents/All%20India%20Radio%20Nagercoil%20Kumari%20FM%20tamil%20radio%20channel%20Online.html' target='_blank' >Oli singapore local</a>","taskState":"1"},
	
	{"taskId":1,"taskDes":"<a href='file:///C:/Users/jmkanna/Documents/All%20India%20Radio%20Nagercoil%20Kumari%20FM%20tamil%20radio%20channel%20Online.html' target='_blank' ><span style='color:red !important'>TEA Kadai 1.30PM - 5.30 PM (3pm to 8pm)</span></a>","taskState":"1"},
	
		{"taskId":1,"taskDes":"<a href='file:///C:/Users/jmkanna/Documents/All%20India%20Radio%20Nagercoil%20Kumari%20FM%20tamil%20radio%20channel%20Online.html' target='_blank' ><span style='color:red !important'>Easya English pesalam @ 12.45 PM</span></a>","taskState":"1"},
		
		{"taskId":1,"taskDes":"<a href='file:///C:/Users/jmkanna/Documents/All%20India%20Radio%20Nagercoil%20Kumari%20FM%20tamil%20radio%20channel%20Online.html' target='_blank' ><span style='color:red !important'>Kunadkka mandakka @ 10.00AM @ Nagercoil</span></a>","taskState":"1"},
	
	{"taskId":2,"taskDes":"<a href='https://www.youtube.com/channel/UC14aFPpH4jF3FfRQZojCfeg/videos' target='_blank' ><span style='color:Green !important'>words of wisdom</span></a>","taskState":"1"},
	
	{"taskId":2,"taskDes":"<a href='https://www.youtube.com/@ENNUVATHELLAMUYARVU/videos' target='_blank' ><span style='color:Green !important'>ENNUVATHELLAM UYARVU</span></a>","taskState":"1"},
	
	
	
	{"taskId":2,"taskDes":"<a href='https://www.youtube.com/@beyondtheordinary-tamil/videos' target='_blank' ><span style='color:Green !important'>Beyond The Ordinary - Tamil Audiobooks</span></a>","taskState":"1"},
	
	{"taskId":2,"taskDes":"<a href='https://www.youtube.com/@everythingispossible5810/videos' target='_blank' ><span style='color:Green !important'>EVERYTHING IS POSSIBLE</span></a>","taskState":"1"},
	
	
	
	{"taskId":2,"taskDes":"<a href='https://www.youtube.com/@EpicLifetamil/videos' target='_blank' ><span style='color:Green !important'>Epic Life Tamil </span></a>","taskState":"1"},
	
	
	
		{"taskId":2,"taskDes":"<a href='https://www.youtube.com/@RuleYourLife/videos' target='_blank' >Rule Your Life  </a>","taskState":"1"},
		
		
		{"taskId":2,"taskDes":"<a href='https://www.youtube.com/@BehindwoodsO2/videos' target='_blank' >Behindwoods O2</a>","taskState":"1"},
	
	
	{"taskId":3,"taskDes":"<a href='https://blogya.in/%E0%AE%8E%E0%AE%A4%E0%AE%B1%E0%AF%8D%E0%AE%95%E0%AE%BE%E0%AE%95-%E0%AE%87%E0%AE%A8%E0%AF%8D%E0%AE%A4-%E0%AE%93%E0%AE%9F%E0%AF%8D%E0%AE%9F%E0%AE%AE%E0%AF%8D' target='_blank' >எதற்காக இந்த ஓட்டம் ? from Blogys.in</a>","taskState":"1"},
	
	  
	  {"taskId":3,"taskDes":"<a href='https://blogya.in/%e0%ae%86%e0%ae%aa%e0%af%8d%e0%ae%aa%e0%ae%bf%e0%ae%a9%e0%af%88-%e0%ae%85%e0%ae%9a%e0%af%88%e0%ae%a4%e0%af%8d%e0%ae%a4%e0%ae%bf%e0%ae%9f%e0%af%8d%e0%ae%9f-%e0%ae%95%e0%af%81%e0%ae%b0%e0%ae%99%e0%af%8d' target='_blank' >ஆப்பினை அசைத்திட்ட குரங்கு</a>","taskState":"1"},
	
	  
	    {"taskId":4,"taskDes":"<a href='https://www.facebook.com/Gurunamam' target='_blank' >Mantras and Miracles</a>","taskState":"1"},
		 {"taskId":5,"taskDes":"<a href='https://www.facebook.com/Gurunamam' target='_blank' >Close and open chrome Implementation</a>","taskState":"1"},
		  {"taskId":5,"taskDes":"<a href='https://www.facebook.com/Gurunamam' target='_blank' >Search  Implementation</a>","taskState":"1"},
		   {"taskId":5,"taskDes":"<a href='https://www.facebook.com/Gurunamam' target='_blank' >Admin subrule</a>","taskState":"0"},
		   
		    {"taskId":6,"taskDes":"<a href='https://www.twinkl.co.in/teaching-wiki/the-wright-brothers' target='_blank' >The Wright Brothers</a>","taskState":"1"},
			
			
			  {"taskId":6,"taskDes":"<a href='https://www.twinkl.co.in/teaching-wiki/the-wright-brothers' target='_blank' >ஒரு புத்திசாலி நபருக்கும் ஒரு ஞானமுள்ளவருக்கும் இடையே உள்ள வித்தியாசம் என்ன? ஒருமுறை என் அப்பா என்னிடம் ஒரு கேள்வி கேட்டார். உங்கள் நண்பர் உங்களை விட 10 ரூபாய் அதிகமாக பெறும் வகையில் 100 ரூபாயை எவ்வாறு பிரிப்பது?</a>","taskState":"1"},

  {"taskId":7,"taskDes":"<a href='https://www.twinkl.co.in/teaching-wiki/the-wright-brothers' target='_blank' >Hi He Likes Beautiful BMW Car Number Of Five Neeyum Naanum Mgr Alla Silukku Pattu Saroja Coondalil Arjun Kallai Cattinaan</a>","taskState":"1"},
  
  
  {"taskId":8,"taskDes":"<a href='https://www.msn.com/en-in/health/medical/101-positive-quotes-to-boost-your-mood-and-brighten-your-day/ss-AA13VCWn?ocid=entnewsntp&cvid=55d909b33fd341a9823f9ce36dd37258#image=8' target='_blank' >101 Positive Quotes to Boost Your Mood and Brighten Your Day</a>","taskState":"1"},
  
  
    {"taskId":9,"taskDes":"<a href='https://www.msn.com/en-in/travel/tripideas/5-famous-street-foods-of-bangalore-that-you-shouldn-t-miss/ar-AA14pnN1?ocid=entnewsntp&cvid=55d909b33fd341a9823f9ce36dd37258' target='_blank' >5 Famous Street Foods Of Bangalore That You Shouldn't Miss</a>","taskState":"1"},



    {"taskId":9,"taskDes":"<a href='https://www.msn.com/en-in/health/wellness/4-unsexy-one-minute-habits-that-save-me-30-hours-every-week/ar-AA14h4zd?ocid=entnewsntp&cvid=55d909b33fd341a9823f9ce36dd37258' target='_blank' >4 Unsexy One-Minute Habits That Save Me 30 Hours Every Week</a>","taskState":"1"},
	
	   {"taskId":9,"taskDes":"<a href='#' target='_blank' >Hi Team, Facing an power cut issue. laptop will shut down soon. will back once power restore</a>","taskState":"1"},


{"taskId":9,"taskDes":"<a href='#' target='_blank' >Rome wasn't built in a day but they were laying bricks every hour. You don't have to build everything you want today, just lay a brick. -James Clear #Motivation</a>","taskState":"1"},


{"taskId":9,"taskDes":"<a href='#' target='_blank' >உலகில் யாருமே கெட்டவர் இல்லை. ஆசையும் கோபமுமே, தீயவைகளைச் செய்யத் தூண்டுகின்றன; அவற்றில் இருந்து ஒருசிலர் தப்பி விடுகிறார்கள்; பெரும்பாலோர் அகப்பட்டுக் கொள்கிறார்கள்; தப்பியவர்கள் நிம்மதியாக வாழ்கிறார்கள்; அகப்பட்டவர்கள், அல்லலில் சிக்கித் தவி்க்கிறார்கள். திருமூலர்,</a>","taskState":"1"},


{"taskId":9,"taskDes":"<a href='https://jsfiddle.net/suhaibjanjua/h8yc0px8/1/' target='_blank' >color console log</a>","taskState":"1"},



{"taskId":10,"taskDes":"<a href='https://www.msn.com/en-in/autos/photos/30-skills-everyone-should-have/ss-AA14LLZF?ocid=entnewsntp&cvid=e0916ce174574264a70bdbce2bc6850d#image=31' target='_blank' >30 skills everyone should have</a>","taskState":"1"},


{"taskId":11,"taskDes":"<a href='https://www.msn.com/en-in/news/india/understanding-the-five-ways-in-which-you-can-fail-in-this-century/ar-AA14FxkP?ocid=entnewsntp&cvid=e0916ce174574264a70bdbce2bc6850d' target='_blank' >Understanding the five ways in which you can fail in this century</a>","taskState":"1"},
		
		
	
{"taskId":12,"taskDes":"<a href='https://www.msn.com/en-in/entertainment/news/7-bad-habits-that-take-away-your-energy-during-the-day/ss-AA152q0y' target='_blank' >7 bad habits that take away your energy during the day</a>","taskState":"1"},


	{"taskId":13,"taskDes":"<a href='https://www.msn.com/en-in/health/other/five-skills-you-should-develop-before-the-age-of-20/ss-AA152juA' target='_blank' >Five skills You Should develop Before the age of 20</a>","taskState":"1"},
	
	
	{"taskId":14,"taskDes":"<a href='https://www.msn.com/en-in/lifestyle/travel/the-7-must-have-items-you-should-always-have-at-home/ss-AA15ievT' target='_blank' >The 7 must-have items you should always have at home</a>","taskState":"1"},
		
	  
	  
	  
	  
	  {"taskId":15,"taskDes":"<a href='https://www.msn.com/en-in/news/other/small-achievable-goals-we-should-all-set-for-ourselves-to-ace-2023/ar-AA15zgJn' target='_blank' >Small Achievable Goals We Should All Set For Ourselves To Ace 2023</a>","taskState":"1"},
		
	  
	  
	  
	   {"taskId":16,"taskDes":"<a href='https://www.msn.com/en-in/news/other/small-achievable-goals-we-should-all-set-for-ourselves-to-ace-2023/ar-AA15zgJn' target='_blank' >Small Achievable Goals We Should All Set For Ourselves To Ace 2023</a>","taskState":"1"},
		
	  
	  
	  
	  
	  
	   {"taskId":17,"taskDes":"<a href='https://www.msn.com/en-in/health/nutrition/want-to-cut-belly-fat-these-4-ayurvedic-herbs-may-help/ar-AA15y57u' target='_blank' >Want to Cut Belly Fat? These 4 Ayurvedic Herbs May Help</a>","taskState":"1"},
		
	  
	  
	  
	   {"taskId":18,"taskDes":"<a href='https://www.msn.com/en-in/health/nutrition/want-to-cut-belly-fat-these-4-ayurvedic-herbs-may-help/ar-AA15y57u' target='_blank' >Want to Cut Belly Fat? These 4 Ayurvedic Herbs May Help</a>","taskState":"1"},
		
	  
	 
	  
	  
	  
	    {"taskId":19,"taskDes":"<a href='https://www.msn.com/en-in/news/india/new-year-2023-11-financial-new-year-s-resolutions-to-save-more-money-in-2023/ar-AA15yMvF' target='_blank' >New Year 2023: 11 Financial New Year's Resolutions To Save More Money in 2023</a>","taskState":"1"},
		
		
		 {"taskId":20,"taskDes":"<a href='https://www.msn.com/en-in/lifestyle/whats-hot/develop-these-9-morning-habits-in-2023-for-a-successful-and-happy-life/ar-AA15wNVI' target='_blank' >Develop These 9 Morning Habits In 2023 For A Successful And Happy Life</a>","taskState":"1"},
		 
		 
		  {"taskId":21,"taskDes":"<a href='https://www.msn.com/en-in/health/fitness/20-ways-to-get-in-shape-that-don-t-feel-like-exercise/ss-AA15FbdP' target='_blank' >20 ways to get in shape that don't feel like exercise</a>","taskState":"1"},
		  
		    {"taskId":22,"taskDes":"<a href='https://www.msn.com/en-in/money/careers/5-international-education-trends-to-watch-in-2023/ar-AA15CDDu' target='_blank' >5 international education trends to watch in 2023</a>","taskState":"1"},
			
			
			  {"taskId":23,"taskDes":"<a href='https://www.msn.com/en-in/autos/photos/20-sexist-compliments-you-should-stop-saying/ss-AA15JCur' target='_blank' >20 sexist compliments you should stop saying</a>","taskState":"1"},
			  
			  
			    {"taskId":24,"taskDes":"<a href='https://www.msn.com/en-in/autos/photos/20-overused-words-and-what-to-say-instead/ss-AA15JZYf' target='_blank' >20 overused words and what to say instead</a>","taskState":"1"},
				
				 {"taskId":25,"taskDes":"<a href='https://www.msn.com/en-in/autos/photos/20-overused-words-and-what-to-say-instead/ss-AA15JZYf' target='_blank' >20 overused words and what to say instead</a>","taskState":"1"},
				 
				  {"taskId":26,"taskDes":"<a href='https://www.msn.com/en-in/lifestyle/horoscope/these-soft-skills-will-help-your-career-succeed-in-2023/ar-AA15LExK' target='_blank' >These soft skills will help your career succeed in 2023</a>","taskState":"1"},
				  
				   {"taskId":27,"taskDes":"<a href='https://www.msn.com/en-in/news/other/things-parents-should-never-say-to-their-kids/ss-AAXIDxS' target='_blank' >Things parents should never say to their kids</a>","taskState":"1"},
				   
				   
	 {"taskId":28,"taskDes":"<a href='https://www.msn.com/en-in/health/health-news/walk-into-the-new-year-with-these-5-positive-affirmations/ar-AA15PGxy' target='_blank' >Walk into the New Year with these 5 positive affirmations</a>","taskState":"1"},
	 
	  {"taskId":29,"taskDes":"<a href='https://www.msn.com/en-in/money/news/educational-trends-that-will-make-2023-a-powerhouse-of-skilling-and-technology/ar-AA15R7lA' target='_blank' >Educational trends that will make 2023 a powerhouse of skilling and technology</a>","taskState":"1"},
	  
	  
	   {"taskId":30,"taskDes":"<a href='https://www.msn.com/en-in/money/topstories/5-ways-to-make-more-money-with-minimal-investment/ar-AA15SI4O' target='_blank' >5 Ways to make more money with minimal investment</a>","taskState":"1"},
	   
	   
	    {"taskId":31,"taskDes":"<a href='https://www.msn.com/en-in/health/nutrition/which-one-is-better-almonds-or-groundnut-find-out-what-the-experts-say/ar-AA15R4ke' target='_blank' >Which one is better: almonds or groundnut? Find out what the experts say</a>","taskState":"1"},
		
		 {"taskId":32,"taskDes":"<a href='https://www.msn.com/en-in/health/nutrition/which-one-is-better-almonds-or-groundnut-find-out-what-the-experts-say/ar-AA15R4ke' target='_blank' >Which one is better: almonds or groundnut? Find out what the experts say</a>","taskState":"1"},
		 
		 {"taskId":33,"taskDes":"<a href='https://www.msn.com/en-in/news/other/get-rid-of-these-habits-to-be-happier/ss-AA15T3Vc' target='_blank' >Get rid of these habits to be happier</a>","taskState":"1"},
		
		
		 {"taskId":33,"taskDes":"<a href='https://www.msn.com/en-in/money/careers/top-10-digital-skills-to-have-in-2023-to-upskill-yourself/ar-AA15UIOG' target='_blank' >Top 10 digital skills to have in 2023 to upskill yourself</a>","taskState":"1"},
		 
		 
		 {"taskId":34,"taskDes":"<a href='https://www.msn.com/en-in/lifestyle/women/10-women-s-safety-rights-you-need-to-be-aware-of/ar-AA15UONr' target='_blank' >10 Women's Safety Rights You Need To Be Aware Of</a>","taskState":"1"},
		 
		 	 {"taskId":35,"taskDes":"<a href='https://www.msn.com/en-in/lifestyle/horoscope/105-ways-to-say-good-luck-and-make-an-impression/ar-AA161Ifq' target='_blank' >105 Ways to Say Good Luck And Make an Impression</a>","taskState":"1"},
			 
	{"taskId":36,"taskDes":"<a href='https://www.msn.com/en-in/health/health-news/7-ways-for-every-mother-to-support-a-shy-child/ar-AA15XqKn' target='_blank' >7 ways for every mother to support a shy child</a>","taskState":"1"},
	
	
	{"taskId":37,"taskDes":"<a href='https://www.msn.com/en-in/health/other/tips-to-manage-anxiety-and-mood-swings-using-simple-techniques-from-neuroscience-mental-health/ar-AA162d1Z' target='_blank' >Tips to manage anxiety and mood swings using simple techniques from neuroscience | Mental Health</a>","taskState":"1"},
	
	
	{"taskId":37,"taskDes":"<a href='https://www.msn.com/en-in/health/other/tips-to-manage-anxiety-and-mood-swings-using-simple-techniques-from-neuroscience-mental-health/ar-AA162d1Z' target='_blank' >Machi door backside</a>","taskState":"1"},
	
	
		{"taskId":37,"taskDes":"<a href='https://www.msn.com/en-in/health/other/tips-to-manage-anxiety-and-mood-swings-using-simple-techniques-from-neuroscience-mental-health/ar-AA162d1Z' target='_blank' >2 Table fans</a>","taskState":"1"},
		
		
		{"taskId":37,"taskDes":"<a href='https://www.msn.com/en-in/health/other/tips-to-manage-anxiety-and-mood-swings-using-simple-techniques-from-neuroscience-mental-health/ar-AA162d1Z' target='_blank' >Painting a trunk box</a>","taskState":"1"},
		
		
		{"taskId":37,"taskDes":"<a href='https://www.msn.com/en-in/health/other/tips-to-manage-anxiety-and-mood-swings-using-simple-techniques-from-neuroscience-mental-health/ar-AA162d1Z' target='_blank' >Painting a Bucket box</a>","taskState":"1"},
		
		{"taskId":38,"taskDes":"<a href='https://avinashikidsworld.blogspot.com/2023/01/blog-post_10.html' target='_blank' >நேர்மையாக இருப்பவர்கள் ‌‌ஏன் நன்றாக வாழ்வதில்லை?</a>","taskState":"1"},
		
		{"taskId":39,"taskDes":"<a href='https://avinashikidsworld.blogspot.com/2023/01/blog-post_11.html' target='_blank' >இதுவும் கடந்து போகும் என்று எப்போதும் நினைப்பதுண்டு.</a>","taskState":"1"},
		
		{"taskId":40,"taskDes":"<a href='https://www.msn.com/en-in/lifestyle/travel/things-you-can-do-today-to-improve-your-quality-of-life/ss-AA16orKN' target='_blank' >Things you can do today to improve your quality of life.</a>","taskState":"1"},
		
		{"taskId":41,"taskDes":"<a href='https://www.msn.com/en-in/lifestyle/travel/things-you-can-do-today-to-improve-your-quality-of-life/ss-AA16orKN' target='_blank' >Things you can do today to improve your quality of life.</a>","taskState":"1"},
		
		
		
		{"taskId":42,"taskDes":"<a href='https://www.msn.com/en-in/health/other/tips-for-maintaining-a-healthy-work-life-balance/ar-AA16C7GQ' target='_blank' >Tips-for-maintaining-a-healthy-work-life-balance</a>","taskState":"1"},
		
		{"taskId":43,"taskDes":"<a href='https://www.msn.com/en-in/health/medical/50-bad-habits-that-have-been-linked-to-cancer/ss-AA16ADoh' target='_blank' >50 bad habits that have been linked to cancer</a>","taskState":"1"},
		
		
		{"taskId":44,"taskDes":"<a href='https://www.msn.com/en-in/money/news/success-mantra-6-practices-that-most-successful-people-follow-which-will-help-you-thrive-at-work/ar-AA16GmPQ?ocid=entnewsntp&cvid=2b96a1a33d614e48936e486b01b9ec43' target='_blank' >Success Mantra: 6 practices that most successful people follow which will help you thrive at work</a>","taskState":"1"},
		
		
		{"taskId":45,"taskDes":"<a href='https://www.msn.com/en-in/health/fitness/11-best-heist-movies-of-all-time-you-should-add-to-your-watch-list/ar-AA16Dqw3' target='_blank' >11 Best Heist Movies Of All Time You Should Add To Your Watch List</a>","taskState":"1"},
		
		{"taskId":46,"taskDes":"<a href='https://www.msn.com/en-in/health/fitness/11-best-heist-movies-of-all-time-you-should-add-to-your-watch-list/ar-AA16Dqw3' target='_blank' >11 Best Heist Movies Of All Time You Should Add To Your Watch List</a>","taskState":"1"},
		
		
		
			{"taskId":47,"taskDes":"<a href='https://www.msn.com/en-in/news/other/basant-panchami-2023-follow-these-15-vastu-tips-for-money-success-and-fame/ar-AA16FXNn' target='_blank' >Basant Panchami 2023: Follow THESE 15 Vastu Tips for Money, Success and Fame</a>","taskState":"1"},
			
			
			
				{"taskId":48,"taskDes":"<a href='https://zeenews.india.com/tamil/lifestyle/vastu-tips-for-money-inflow-prosperity-morpankhi-plant-386109' target='_blank' >Vastu Tips: வீண் செலவை குறைத்து, பண வரவை அதிகரிக்கணுமா? இந்த செடிதான் தீர்வு</a>","taskState":"1"},
				
			{"taskId":49,"taskDes":"<a href='https://tamil.oneindia.com/news/chennai/dmk-daily-murasoli-condemns-annamalai-comments-against-tnhrce-495977.html' target='_blank' >நீயே அயிரைமீன்- விலாங்குச் சேட்டை ஏன்?</a>","taskState":"1"},	
			
			
				{"taskId":49,"taskDes":"<a href='https://tamil.oneindia.com/news/chennai/dmk-daily-murasoli-condemns-annamalai-comments-against-tnhrce-495977.html' target='_blank' >1. Dresh wash</a>","taskState":"1"},	
				
				{"taskId":49,"taskDes":"<a href='https://tamil.oneindia.com/news/chennai/dmk-daily-murasoli-condemns-annamalai-comments-against-tnhrce-495977.html' target='_blank' >2. Put grains in sunlight</a>","taskState":"1"},	
				{"taskId":49,"taskDes":"<a href='https://tamil.oneindia.com/news/chennai/dmk-daily-murasoli-condemns-annamalai-comments-against-tnhrce-495977.html' target='_blank' >3. Coconut</a>","taskState":"1"},	

{"taskId":49,"taskDes":"<a href='https://tamil.oneindia.com/news/chennai/dmk-daily-murasoli-condemns-annamalai-comments-against-tnhrce-495977.html' target='_blank' >4. April lease Payment</a>","taskState":"1"},	


{"taskId":50,"taskDes":"<a href='https://tamil.oneindia.com/news/chennai/dmk-daily-murasoli-condemns-annamalai-comments-against-tnhrce-495977.html' target='_blank' >5. மனித மனம் எப்போதும் அடுத்தவரையே நோட்டமிட்டுக் கொண்டிருக்கும்.  கழுதை Vs குதிரை</a>","taskState":"1"},	


{"taskId":51,"taskDes":"<a href='https://tamil.oneindia.com/news/chennai/dmk-daily-murasoli-condemns-annamalai-comments-against-tnhrce-495977.html' target='_blank' >6. An entire sea of water can't sink a ship unless it's inside the ship. Similarly, the negativity of the world can't put you down unless you allow it to get</a>","taskState":"1"},	


{"taskId":52,"taskDes":"<a href='https://tamil.oneindia.com/news/chennai/dmk-daily-murasoli-condemns-annamalai-comments-against-tnhrce-495977.html' target='_blank' >7. Kalaimaaan beatiful kombu Vs Karuppana Kallkal</a>","taskState":"1"},		
	
	
	{"taskId":53,"taskDes":"<a href='https://avinashikidsworld.blogspot.com/2023/01/blog-post_27.html' target='_blank' >7.கிருஷ்ணர் ஏன் அர்ஜுனனுக்கு பகவத் கீதையை போதித்தார்?</a>","taskState":"1"},

	{"taskId":54,"taskDes":"<a href='#' target='_blank' >8. Avoiding certain people to protect your emotional health is not a weakness. It's wisdom. - Anonymous </a>","taskState":"1"},
	
	{"taskId":55,"taskDes":"<a href='https://avinashikidsworld.blogspot.com/2023/01/blog-post_30.html' target='_blank' >9. “வாழ்வின் எதார்த்தத்தை புரிந்து கொள்கிறவர்களே மகிழ்ச்சியாக வாழ்கிறார்கள்.” </a>","taskState":"1"},
	
		{"taskId":56,"taskDes":"<a href='https://avinashikidsworld.blogspot.com/2023/02/blog-post.html' target='_blank' >10. நாம் தெரிந்து கொள்ள வேண்டிய வாழ்க்கை பாடங்கள்!!! </a>","taskState":"1"},
	
		{"taskId":57,"taskDes":"<a href='https://avinashikidsworld.blogspot.com/2023/02/blog-post_2.html' target='_blank' >11. தானம் செய்வது என்றால் என்ன? தர்மம் செய்வது என்றால் என்ன? </a>","taskState":"1"},
		
		
		{"taskId":58,"taskDes":"<a href='https://avinashikidsworld.blogspot.com/2023/02/blog-post_3.html' target='_blank' >12. நீண்ட நாள் வாழ்வது வரமா, சாபமா? </a>","taskState":"1"},


{"taskId":59,"taskDes":"<a href='https://avinashikidsworld.blogspot.com/2023/02/blog-post_6.html' target='_blank' >13. சீனாவில் நடந்த ஒரு வங்கி கொள்ளை - சிரிக்க சிந்திக்க ஒரு கதை!! </a>","taskState":"1"},


{"taskId":60,"taskDes":"<a href='https://www.msn.com/en-in/money/technology/7-ways-to-be-happy-at-the-workplace/ar-AA177dpd' target='_blank' >14. 7 ways to be happy at the workplace</a>","taskState":"1"},



{"taskId":61,"taskDes":"<a href='https://avinashikidsworld.blogspot.com/2023/02/blog-post_10.html' target='_blank' >15. பாரதி பாஸ்கர் ஒரு மேடையில் கூறிய ஜென் கதை , , உன் மனதை ஏன் குவளையாக வைத்திருக்கிறாய் ?</a>","taskState":"1"},


{"taskId":62,"taskDes":"<a href='https://avinashikidsworld.blogspot.com/2023/02/blog-post_10.html' target='_blank' >16. பநல்ல விஷயங்களை பார்த்தாலும் /கேட்டாலும்!!!  - ஒரு சமயம், அபூர்வமான மந்திரம் ஒன்றை ஆஞ்சநேயருக்கு உபதேசித்த ஸ்ரீராமர்</a>","taskState":"1"},



{"taskId":63,"taskDes":"<a href='https://avinashikidsworld.blogspot.com/2023/02/blog-post_10.html' target='_blank' >17. பஅனைத்துமே நேர்மறையாக எடுத்துக் கொள்வது சரியா? ஒருவர் ஒரு நிறுவனத்தில் ஒரு குறிப்பிட்ட தொழில்நுட்பத்தில் பெரிய பதவியில் இருந்தார். அவரது திறமை காரணமாக, அவருக்கு மற்ற பல்வேறு நிறுவனங்களில் இருந்து, வேலை வாய்ப்புகள் வந்தபடி இருந்தன. ஆனால், அவர் தான் வேலை பார்த்த நிறுவனத்திற்கு விசுவாசமாக இருக்க வேண்டுமென்று எண்ணி, அந்த வாய்ப்புகளை நிராகரித்தார்.</a>","taskState":"1"},


{"taskId":64,"taskDes":"<a href='https://www.msn.com/en-in/health/fitness/20-books-to-fight-anxiety/ss-AA17vvpZ?ocid=entnewsntp' target='_blank' >18. 20 books to fight anxiety</a>","taskState":"1"},


{"taskId":65,"taskDes":"<a href='https://www.msn.com/en-in/money/news/tech-tips-how-to-read-whatsapp-messages-without-letting-the-sender-know/ar-AA17vSma' target='_blank' >19. Tech tips: How to read WhatsApp messages without letting the sender know</a>","taskState":"1"},


{"taskId":66,"taskDes":"<a href='https://www.msn.com/en-in/money/news/itr-forms-for-ay-2023-24-notified-things-you-need-to-know/ar-AA17v9gX' target='_blank' >20. ITR Forms For AY 2023-24 Notified: Things You Need to Know</a>","taskState":"1"},

{"taskId":67,"taskDes":"<a href='https://www.msn.com/en-in/lifestyle/travel/summer-vacation-2023-awesome-activities-to-keep-your-kids-engaged-during-holidays/ar-AA17lRvD' target='_blank' >21. Summer Vacation 2023: Awesome Activities to Keep Your Kids Engaged During Holidays</a>","taskState":"1"},


{"taskId":67,"taskDes":"<a href='https://www.youtube.com/watch?v=rsQ2CGisq0s' target='_blank' >21. Super Singer 02/03/16 Yelisai Geethame</a>","taskState":"1"},

{"taskId":67,"taskDes":"<a href='https://www.youtube.com/watch?v=auItNOLvJEs' target='_blank' >21. Super Singer Junior - Naadham En Jeevane by Shree Raksha</a>","taskState":"1"},



{"taskId":67,"taskDes":"<a href='https://www.youtube.com/watch?v=Izu9rfG02kA' target='_blank' >21. Super Singer Junior - Naadham En Jeevane by Shree Raksha</a>","taskState":"1"},

{"taskId":67,"taskDes":"<a href='https://www.youtube.com/watch?v=l79BVP_GfDo' target='_blank' >21. Super Singer Junior - Kangal neeye</a>","taskState":"1"},

{"taskId":67,"taskDes":"<a href='https://www.youtube.com/watch?v=VWzgrHLor8A' target='_blank' >21. Super Singer Junior - Kaatrukkenna Veli by Sivaranjini</a>","taskState":"1"},

{"taskId":67,"taskDes":"<a href='https://www.youtube.com/watch?v=OxeCi0GKNdM' target='_blank' >21. Super Singer Junior - Kannan Vanthu Paadugindran by Shree Raksha and Thushara</a>","taskState":"1"},


{"taskId":67,"taskDes":"<a href='https://www.youtube.com/watch?v=etTI-GALlyE' target='_blank' >21. Kalyaana Then Nilaa by Chithra and Bhavin</a>","taskState":"1"},

 
 
 {"taskId":67,"taskDes":"<a href='https://www.youtube.com/watch?v=pLJ7shuBIAg' target='_blank' >21. </a>","taskState":"1"},

  {"taskId":67,"taskDes":"<a href='https://www.youtube.com/watch?v=9QHiTekCVH4' target='_blank' >21.Ragasiyamami </a>","taskState":"1"},


   {"taskId":6,"taskDes":"<a href='https://www.youtube.com/@tamilhitsongssjr6158/videos' target='_blank' >Tamil HITS SJR </a>","taskState":"1"},



 {"taskId":6,"taskDes":"<a href='https://www.youtube.com/@Niyazbaseer/videos' target='_blank' >Niyazbaseer Tamil motivational videos </a>","taskState":"1"},



 {"taskId":6,"taskDes":"<a href='https://www.youtube.com/watch?v=F5JCkYOaygo' target='_blank' >Ghibran Tamil motivational videos </a>","taskState":"1"},
 
  {"taskId":6,"taskDes":"<a href='https://www.youtube.com/watch?v=FQ-VNKao-aA' target='_blank' >Enai Thedum Megam Sabai Vanthu Serum Vizhiyil Varumo - Movie : Kannodu Kan  </a>","taskState":"1"},
 
 
   {"taskId":6,"taskDes":"<a href='https://www.msn.com/en-in/health/wellness/10-habits-that-age-you-faster/ss-AA184Jd2' target='_blank' >10 habits that age you faster  </a>","taskState":"1"},
   
      {"taskId":6,"taskDes":"<a href='https://twitter.com/ValaAfshar/status/1587107638197747714' target='_blank' >AI powered app helps you count things  </a>","taskState":"1"},
	  
	  
	    {"taskId":6,"taskDes":"<a href='https://medium.com/@braddwyer/behind-the-magic-how-we-built-the-arkit-sudoku-solver-e586e5b685b0' target='_blank' >Behind the Magic: How we built the ARKit Sudoku Solver  </a>","taskState":"1"},
 
     {"taskId":6,"taskDes":"<a href='https://medium.com/@braddwyer/behind-the-magic-how-we-built-the-arkit-sudoku-solver-e586e5b685b0' target='_blank' >data → info → knowledge → insight → wisdom → impact ⇆ repeat  </a>","taskState":"1"},
	 
	  {"taskId":6,"taskDes":"<a href='https://twitter.com/i/status/1626268909409009665' target='_blank' >The use of augmented reality to improve civil engineering and architectural design </a>","taskState":"1"},
	 
	   {"taskId":6,"taskDes":"<a href='https://twitter.com/i/status/1626268909409009665' target='_blank' >The use of augmented reality to improve civil engineering and architectural design </a>","taskState":"1"},
	   
	    {"taskId":6,"taskDes":"<a href=' https://mobile.twitter.com/frankfaces/status/1577461597533982720' target='_blank' >This is the future of digital marketing and commerce </a>","taskState":"1"},
	 
	 
	 
	 
	  {"taskId":6,"taskDes":"<a href=' https://mobile.twitter.com/frankfaces/status/1577461597533982720' target='_blank' >This is the future of interactive 3D and AR powered visual e-commerce </a>","taskState":"1"},
	


	 
	  {"taskId":6,"taskDes":"<a href=' https://mobile.twitter.com/frankfaces/status/1577461597533982720' target='_blank' >You can swim more safely with this wristband</a>","taskState":"1"},
	  {"taskId":6,"taskDes":"<a href=' https://mobile.twitter.com/frankfaces/status/1577461597533982720' target='_blank' >There is fruit inside the edge of cactus</a>","taskState":"1"},
	
	
	 {"taskId":6,"taskDes":"<a href=' https://mobile.twitter.com/frankfaces/status/1577461597533982720' target='_blank' >You are not a team because you work together. You are a team because you trust, respect and care for each other.</a>","taskState":"1"},
	
	
	 {"taskId":6,"taskDes":"<a href=' https://twitter.com/i/status/1629338356717895687' target='_blank' >An artist and a student of physics at work</a>","taskState":"1"},
	
	
	
	 {"taskId":6,"taskDes":"<a href=' https://twitter.com/i/status/1629338356717895687' target='_blank' >It is not that they cannot find the solution. It is that they cannot see the problem.</a>","taskState":"1"},
	 
	  {"taskId":6,"taskDes":"<a href=' https://twitter.com/i/status/1629338356717895687' target='_blank' >It is not that they cannot find the solution. It is that they cannot see the problem.</a>","taskState":"1"},
	
	
	
	  {"taskId":6,"taskDes":"<a href=' https://twitter.com/i/status/1628402637065404417' target='_blank' >You are not a team because you work together. You are a team because you trust, respect and care for each other.</a>","taskState":"1"},
	
	
	  {"taskId":6,"taskDes":"<a href=' https://twitter.com/i/status/1628173070740365313' target='_blank' >CTRL - (A to Z) shortcut key definitions</a>","taskState":"1"},
	
	
	
	
	
	 {"taskId":6,"taskDes":"<a href=' https://twitter.com/i/status/1628766594104008706' target='_blank' >A smart and elegant bicycle integrated lock design</a>","taskState":"1"},
	
	
	
	
	 {"taskId":6,"taskDes":"<a href=' https://twitter.com/i/status/1628179874291515392' target='_blank' >Definition: digital native</a>","taskState":"1"},
	
	
	 {"taskId":6,"taskDes":"<a href=' https://twitter.com/i/status/1627365801136214016' target='_blank' >Math is important.</a>","taskState":"1"},
	
	
	
	
	 {"taskId":6,"taskDes":"<a href=' https://twitter.com/i/status/1627151394040946689' target='_blank' >This is how you recycle a scooter 🛵.</a>","taskState":"1"},
	
	
	{"taskId":6,"taskDes":"<a href=' https://twitter.com/i/status/1627347156989317123' target='_blank' >One impact of meditation on our brain is a clearer view of the world around us</a>","taskState":"1"},
	
	{"taskId":6,"taskDes":"<a href=' 	https://twitter.com/i/status/1627329679374839810' target='_blank' >Slow and steady wins the race. —Aesop</a>","taskState":"1"},
	
	{"taskId":6,"taskDes":"<a href=' 	https://twitter.com/i/status/1627329679374839810' target='_blank' >Think like a farmer ----- • do not shout at the crops • do not blame the crops for not growing fast enough • choose the best plants for the soil • irrigate and fertilize • remember you will have good seasons and bad seasons - you can’t control the weather, only be prepared for it</a>","taskState":"1"},
	
	
	{"taskId":6,"taskDes":"<a href=' 	https://www.msn.com/en-in/autos/photos/30-skills-everyone-should-have/ss-AA187MZ6?ocid=entnewsntp' target='_blank' >30 skills everyone should have</a>","taskState":"1"},
	
	{"taskId":6,"taskDes":"<a href=' 	https://www.msn.com/en-in/money/topstories/anand-mahindra-shares-video-of-woman-showing-how-to-pack-efficiently-internet-is-amazed/ar-AA188wkX' target='_blank' >Anand Mahindra shares video of woman showing how to pack efficiently. Internet is amazed</a>","taskState":"1"},
		
		
		
		
		{"taskId":6,"taskDes":"<a href=' 	https://www.youtube.com/watch?v=MMhE2uKlo5E' target='_blank' >Anand Mahindra shares video of woman showing how to pack efficiently. Internet is amazed</a>","taskState":"1"},
		
		
		
		
		
		
		
		
		
	
		
		
		


		
		
	  ] // Array end
	
    }
    btnSave.addEventListener('click', saveTask);
    showList();
  }

  //End Init

  //CRUD task

  function showList() {

    if (!!taskList.length) {
      getLastTaskId();
      for (var item in taskList) {
        var task = taskList[item];
        addTaskToList(task);
      }
      syncEvents();
    }
    
  }

  function saveTask(event) {

    var task = {
      taskId: lastId,
      taskDes: document.getElementById("task_des").value,
      taskState: document.getElementById("task_state").value
    };
    taskList.push(task);
    syncTask();
    addTaskToList(task);
    syncEvents();
    lastId++;
  }

  function addTaskToList(task) {

    var removeIcon = document.createElement('span');
    var element = document.createElement('li');
    var updateIcon = document.createElement('span');

    removeIcon.innerHTML = "X";
    removeIcon.className = "remove_item clickeable";
    removeIcon.setAttribute("title", "Remove");

    updateIcon.innerHTML = "U";
    updateIcon.className = "update_icon clickeable";
    updateIcon.setAttribute("title", "Update");


    element.appendChild(removeIcon);
    element.appendChild(updateIcon);
    element.setAttribute("id", task.taskId);
    element.innerHTML += task.taskDes;
	element.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-"+task.taskState;
    taskWrapper.appendChild(element);
  }

  function updateTask(event) {

    var taskTag = event.currentTarget.parentNode;
    var taskId = taskTag.id;
    var taskToUpdate = findTask(taskId).task;
    var pos = findTask(taskId).pos;
    if (!!taskToUpdate) {
      var des = prompt("Task Description", taskToUpdate.taskDes);
      var state = prompt("Task State", taskToUpdate.taskState);
      taskToUpdate.taskDes = des;
      taskToUpdate.taskState = state;
      taskList[pos] = taskToUpdate;
      taskTag.lastChild.textContent = taskToUpdate.taskDes;
      syncTask();
    }
  }

  function removeTask(event) {

    var taskToRemove = event.currentTarget.parentNode;
    var taskId = taskToRemove.id;
    taskWrapper.removeChild(taskToRemove);
    taskList.forEach(function(value, i) {
      if (value.taskId == taskId) {
        taskList.splice(i, 1);
      }
    })

    syncTask();
  }

  // End CRUD


  //Common

  function syncTask() {

    window.localStorage.setItem('taskList', JSON.stringify(taskList));
    taskList = JSON.parse(window.localStorage.getItem('taskList'));
  }

  function getLastTaskId() {
    var lastTask = taskList[taskList.length - 1];
    lastId = lastTask.taskId + 1;
  }

  function syncEvents() {

    updateIcon = document.getElementsByClassName("update_icon");
    removeIcon = document.getElementsByClassName("remove_item");
    if (!!removeIcon.length) {
      for (var i = 0; i < removeIcon.length; i++) {
        removeIcon[i].addEventListener('click', removeTask);
      }
    }
    if (!!updateIcon.length) {
      for (var j = 0; j < updateIcon.length; j++) {
        updateIcon[j].addEventListener('click', updateTask);
      }
    }
  }

  function findTask(id) {

    var response = {
      task: '',
      pos: 0
    };
    taskList.forEach(function(value, i) {
      if (value.taskId == id) {
        response.task = value;
        response.pos = i;
      }
    });

    return response;
  }

  //End Common


  init();


})();


// siriya paravai 
//Nizhal thedum nijankal
