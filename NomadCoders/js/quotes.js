const quotes = [
    {   
        quote: "I never dreamed about success, I worked for it." ,
        author: "Estee Lauder"
    },
    {  
         quote: "The supreme irony of life is that hardly anyone gets out of it alive.",
        author: "Robert Heinlein"
    },
    {   
        quote: "To laugh at yourself is to love yourself.",
        author: "Walt Disney"
    },
    {  
         quote: "Life is a long lesson in humility.",
         author: "ames M. Barrie"
    },
    {  
         quote: "The tragedy of life is what dies in the hearts and souls of people while they live.",
         author: "Albert Einstein"
    },
    {  
         quote: "Life is like playing a violin in public and learning the instrument as one goes on.",
         author: "Samuel Butler"
    },
    {   
        quote: "By nature, men are nearly alike; by practice, they get to be wide apart.",
        author: "Confucius"
    },
    {   
        quote: "All our dreams can come true, If we have the courage to pursue them.",
        author: "Walt Disney"
    },
    {  
         quote: "Life is a moderately good play with a badly written third act.",
         author: "Truman Capote"
    },
    {  
         quote: "Who sats that my dreams have to stay just my dreams?",
         author: "Walt Disney"
    }
 ];
    

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)] ;

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;