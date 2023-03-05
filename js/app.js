(function () {
  const quotes = [

  { quote: "Waxa ay aheyd goor galab ah oo ay qoraxda sii dhaceyso waxaan fadhinay geed u dhaw xafadeena aniga",
    author:"zeckabdi Febraayo 15, 2023"
      
  },

  {
    quote: "yarayd yimadeen. Dadkii ehelka u ahaa iyo dhalinyaradii ay saaxiibada ahaayeen baa gurigii ku soo xoomay. Damaashaad iyo",
    author: "zeckabdi  Febraayo 16, 2023 "
  },

  {
    quote: "Siciid oo is xanaajinayo ayaa kacay oo yiri: Soomaali dumarkooda waad ugu saraysaaye Sarajooga goortaad kacdaa samay la",
    author: "zeckabdi  Febraayo 9, 2023"
  }

  ];
  const btn = document.querySelector("button");
  const text = document.querySelector("#quote");
  const author = document.querySelector(".author");

  /*btn addEventListener("click", function()*/
  btn.addEventListener("click", function() {
   let index = Math.floor(Math.random() * quotes.length);
   text.textContent = quotes[index].quote;
   author.textContent = quotes[index].author;
  
  })

})();