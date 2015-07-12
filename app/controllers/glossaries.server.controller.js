/**
 * List of datasets
 */
exports.list = function (req, res) {
    res.json(AllMovies_Glossary)
};


var AllMovies_Glossary = [{
    "Name": "Arnold Schwarzenegger Movies",
    "Source": "https://en.wikipedia.org/wiki/Arnold_Schwarzenegger_filmography",
    "Processing ": "1) Kent Merrell copied data from a table on Wikipedia and pasted into a googlesheet.  2)Export to CSV 3) Convert CSV to JSON with http://www.convertcsv.com/csv-to-json.htm",
    SourceDate: "July 1, 2015",
    Variables: [
        {"VarName": "Title", "ShortDescription": "Title of movie.", "LongDescription": ""},
        {"VarName": "Year", "ShortDescription": "The year the movie was released.", "LongDescription": ""},
        {"VarName": "Role", "ShortDescription": "The rolw that Arnold Schwarzenegger played.", "LongDescription": ""},
        {"VarName": "Director", "ShortDescription": "Name of the director of the movie.", "LongDescription": ""},
        {
            "VarName": "Studio(s)",
            "ShortDescription": "Production studio.",
            "LongDescription": "Name of the movie studio that produced movie."
        },
        {
            "VarName": "Rotten Tomatoes",
            "ShortDescription": "Rating from Rotten Tomatoes movie rating service",
            "LongDescription": ""
        },
        {"VarName": "Notes", "ShortDescription": "Title of movie", "LongDescription": ""}
    ]
}, {
    "Name": "Jamie Lee Curtis Movies",
    "Source": "https://en.wikipedia.org/wiki/Arnold_Schwarzenegger_filmography",
    "Processing ": "1) Kent Merrell copied data from a table on Wikipedia and pasted into a googlesheet.  2)Export to CSV 3) Convert CSV to JSON with http://www.convertcsv.com/csv-to-json.htm",
    "SourceDate": "July 1, 2015",
    "Variables": [
        {"VarName": "Title", "ShortDescription": "Title of movie.", "LongDescription": ""},
        {"VarName": "Year", "ShortDescription": "The year the movie was released.", "LongDescription": ""},
        {"VarName": "Role", "ShortDescription": "The rolw that Arnold Schwarzenegger played.", "LongDescription": ""},
        {"VarName": "Notes", "ShortDescription": "Title of movie", "LongDescription": ""}
    ]
}];

var ArnoldSchwarzeneggerMovies_Data = [
    {
        "Title": "Twins",
        "Year": "1988",
        "Role": "Julius Benedict",
        "Director": "Ivan Reitman",
        "Studio(s)": "Universal Pictures",
        "Rotten Tomatoes": "38%",
        "Notes": ""
    },
    {
        "Title": "True Lies",
        "Year": "1994",
        "Role": "Harry Tasker",
        "Director": "James Cameron",
        "Studio(s)": "20th Century Fox\nUniversal Pictures (UK)",
        "Rotten Tomatoes": "72%",
        "Notes": ""
    },
    {
        "Title": "Total Recall",
        "Year": "1990",
        "Role": "Douglas Quaid / Hauser",
        "Director": "Paul Verhoeven",
        "Studio(s)": "TriStar Pictures",
        "Rotten Tomatoes": "84%",
        "Notes": ""
    },
    {
        "Title": "The Villain",
        "Year": "1979",
        "Role": "Handsome Stranger",
        "Director": "Hal Needham",
        "Studio(s)": "Columbia Pictures",
        "Rotten Tomatoes": "0%",
        "Notes": ""
    },
    {
        "Title": "The Terminator",
        "Year": "1984",
        "Role": "The Terminator",
        "Director": "James Cameron",
        "Studio(s)": "Orion Pictures",
        "Rotten Tomatoes": "100%",
        "Notes": ""
    },
    {
        "Title": "The Running Man",
        "Year": "1987",
        "Role": "Ben Richards",
        "Director": "Paul Michael Glaser",
        "Studio(s)": "TriStar Pictures",
        "Rotten Tomatoes": "61%",
        "Notes": ""
    },
    {
        "Title": "The Rundown",
        "Year": "2003",
        "Role": "Bar Patron",
        "Director": "Peter Berg",
        "Studio(s)": "Universal Pictures(US/Japan)\nColumbia Pictures(Internationally)",
        "Rotten Tomatoes": "71%",
        "Notes": "Cameo; uncredited[8]"
    },
    {
        "Title": "The Long Goodbye",
        "Year": "1973",
        "Role": "Hood in Augustine's office",
        "Director": "Robert Altman",
        "Studio(s)": "United Artists",
        "Rotten Tomatoes": "96%",
        "Notes": "Uncredited"
    },
    {
        "Title": "The Last Stand",
        "Year": "2013",
        "Role": "Sheriff Ray Owens",
        "Director": "Kim Jee-woon",
        "Studio(s)": "Lionsgate",
        "Rotten Tomatoes": "60%",
        "Notes": ""
    },
    {
        "Title": "The Kid & I",
        "Year": "2005",
        "Role": "Himself",
        "Director": "Penelope Spheeris",
        "Studio(s)": "PorchLight Entertainment",
        "Rotten Tomatoes": "33%",
        "Notes": "Cameo"
    },
    {
        "Title": "The Expendables 3",
        "Year": "2014",
        "Role": "Trench Mauser",
        "Director": "Patrick Hughes",
        "Studio(s)": "Lionsgate",
        "Rotten Tomatoes": "33%",
        "Notes": ""
    },
    {
        "Title": "The Expendables 2",
        "Year": "2012",
        "Role": "Trench Mauser",
        "Director": "Simon West",
        "Studio(s)": "Lionsgate",
        "Rotten Tomatoes": "65%",
        "Notes": ""
    },
    {
        "Title": "The Expendables",
        "Year": "2010",
        "Role": "Trench Mauser",
        "Director": "Sylvester Stallone",
        "Studio(s)": "Lionsgate",
        "Rotten Tomatoes": "41%",
        "Notes": "Uncredited[2]"
    },
    {
        "Title": "The Comeback",
        "Year": "1980",
        "Role": "Himself",
        "Director": "Kit Laughlin",
        "Studio(s)": "",
        "Rotten Tomatoes": "",
        "Notes": "Documentary film"
    },
    {
        "Title": "The 6th Day",
        "Year": "2000",
        "Role": "Adam Gibson / Adam Gibson Clone",
        "Director": "Roger Spottiswoode",
        "Studio(s)": "Columbia Pictures",
        "Rotten Tomatoes": "41%",
        "Notes": "Also producer"
    },
    {
        "Title": "Terminator Salvation",
        "Year": "2009",
        "Role": "The Terminator",
        "Director": "McG",
        "Studio(s)": "Warner Bros. Pictures(US)\nColumbia Pictures(Internationally)",
        "Rotten Tomatoes": "33%",
        "Notes": "Uncredited CGI recreation of likeness imposed on a stand-in[9]"
    },
    {
        "Title": "Terminator Genisys",
        "Year": "2015",
        "Role": "Guardian (Terminator)",
        "Director": "Alan Taylor",
        "Studio(s)": "Paramount Pictures",
        "Rotten Tomatoes": "",
        "Notes": "In post-production"
    },
    {
        "Title": "Terminator 3: Rise of the Machines",
        "Year": "2003",
        "Role": "The Terminator",
        "Director": "Jonathan Mostow",
        "Studio(s)": "Warner Bros. Pictures(US)\nColumbia Pictures(internationally)",
        "Rotten Tomatoes": "70%",
        "Notes": ""
    },
    {
        "Title": "Terminator 2: Judgment Day",
        "Year": "1991",
        "Role": "The Terminator",
        "Director": "James Cameron",
        "Studio(s)": "TriStar Pictures",
        "Rotten Tomatoes": "92%",
        "Notes": ""
    },
    {
        "Title": "Terminator 2: 3-D Battle Across Time",
        "Year": "1996",
        "Role": "The Terminator",
        "Director": "James Cameron\nJohn Bruno\nStan Winston",
        "Studio(s)": "Universal Studios",
        "Rotten Tomatoes": "",
        "Notes": "Attraction at various Universal Studios Theme Parks"
    },
    {
        "Title": "Stay Hungry",
        "Year": "1976",
        "Role": "Joe Santo",
        "Director": "Bob Rafelson",
        "Studio(s)": "United Artists",
        "Rotten Tomatoes": "73%",
        "Notes": ""
    },
    {
        "Title": "Scavenger Hunt",
        "Year": "1979",
        "Role": "Lars",
        "Director": "Michael Schultz",
        "Studio(s)": "20th Century Fox",
        "Rotten Tomatoes": "",
        "Notes": ""
    },
    {
        "Title": "Sabotage",
        "Year": "2014",
        "Role": "John 'Breacher' Wharton",
        "Director": "David Ayer",
        "Studio(s)": "Open Road Films",
        "Rotten Tomatoes": "19%",
        "Notes": ""
    },
    {
        "Title": "Red Sonja",
        "Year": "1985",
        "Role": "Kalidor",
        "Director": "Richard Fleischer",
        "Studio(s)": "MGM / United Artists",
        "Rotten Tomatoes": "20%",
        "Notes": ""
    },
    {
        "Title": "Red Heat",
        "Year": "1988",
        "Role": "Captain Ivan Danko",
        "Director": "Walter Hill",
        "Studio(s)": "TriStar Pictures",
        "Rotten Tomatoes": "64%",
        "Notes": ""
    },
    {
        "Title": "Raw Deal",
        "Year": "1986",
        "Role": "Mark Kaminsky, aka Joseph P. Brenner",
        "Director": "John Irvin",
        "Studio(s)": "De Laurentiis Entertainment Group\nEmbassy Pictures",
        "Rotten Tomatoes": "25%",
        "Notes": ""
    },
    {
        "Title": "Pumping Iron",
        "Year": "1977",
        "Role": "Himself",
        "Director": "Robert Fiore\nGeorge Butler",
        "Studio(s)": "Cinema 5",
        "Rotten Tomatoes": "96%",
        "Notes": ""
    },
    {
        "Title": "Predator",
        "Year": "1987",
        "Role": "Major Alan \"Dutch\" Schaeffer",
        "Director": "John McTiernan",
        "Studio(s)": "20th Century Fox",
        "Rotten Tomatoes": "78%",
        "Notes": ""
    },
    {
        "Title": "Maggie",
        "Year": "2015",
        "Role": "Wade",
        "Director": "Henry Hobson",
        "Studio(s)": "Lionsgate",
        "Rotten Tomatoes": "51%",
        "Notes": ""
    },
    {
        "Title": "Last Action Hero",
        "Year": "1993",
        "Role": "Jack Slater / Himself",
        "Director": "John McTiernan",
        "Studio(s)": "Columbia Pictures",
        "Rotten Tomatoes": "37%",
        "Notes": "Also executive producer"
    },
    {
        "Title": "Kindergarten Cop",
        "Year": "1990",
        "Role": "Detective John Kimble",
        "Director": "Ivan Reitman",
        "Studio(s)": "Universal Pictures",
        "Rotten Tomatoes": "51%",
        "Notes": ""
    },
    {
        "Title": "Junior",
        "Year": "1994",
        "Role": "Dr. Alex Hesse",
        "Director": "Ivan Reitman",
        "Studio(s)": "Universal Pictures",
        "Rotten Tomatoes": "32%",
        "Notes": ""
    },
    {
        "Title": "Jingle All the Way",
        "Year": "1996",
        "Role": "Howard Langston",
        "Director": "Brian Levant",
        "Studio(s)": "20th Century Fox",
        "Rotten Tomatoes": "17%",
        "Notes": ""
    },
    {
        "Title": "Hercules in New York",
        "Year": "1969",
        "Role": "Hercules",
        "Director": "Arthur Allan Seidelman",
        "Studio(s)": "Trimark Pictures",
        "Rotten Tomatoes": "17%",
        "Notes": "Credited as Arnold Strong[6]"
    },
    {
        "Title": "Happy Anniversary and Goodbye",
        "Year": "1974",
        "Role": "Rico",
        "Director": "Jack Donohue",
        "Studio(s)": "CBS",
        "Rotten Tomatoes": "",
        "Notes": ""
    },
    {
        "Title": "Escape Plan",
        "Year": "2013",
        "Role": "Emil Rottmayer / Victor Mannheim",
        "Director": "Mikael Håfström",
        "Studio(s)": "Summit Entertainment",
        "Rotten Tomatoes": "49%",
        "Notes": ""
    },
    {
        "Title": "Eraser",
        "Year": "1996",
        "Role": "U.S. Marshal John Kruger",
        "Director": "Chuck Russell",
        "Studio(s)": "Warner Bros. Pictures",
        "Rotten Tomatoes": "36%",
        "Notes": ""
    },
    {
        "Title": "End of Days",
        "Year": "1999",
        "Role": "Jericho Cane",
        "Director": "Peter Hyams",
        "Studio(s)": "Universal Pictures (US)\nBuena Vista International(Internationally)",
        "Rotten Tomatoes": "11%",
        "Notes": ""
    },
    {
        "Title": "Dr. Dolittle 2",
        "Year": "2001",
        "Role": "White Wolf",
        "Director": "Steve Carr",
        "Studio(s)": "20th Century Fox",
        "Rotten Tomatoes": "43%",
        "Notes": "Voice only; uncredited[7]"
    },
    {
        "Title": "Dave",
        "Year": "1993",
        "Role": "Himself",
        "Director": "Ivan Reitman",
        "Studio(s)": "Warner Bros. Pictures",
        "Rotten Tomatoes": "94%",
        "Notes": "Cameo"
    },
    {
        "Title": "Conan the Destroyer",
        "Year": "1984",
        "Role": "Conan",
        "Director": "Richard Fleischer",
        "Studio(s)": "Universal Pictures",
        "Rotten Tomatoes": "27%",
        "Notes": ""
    },
    {
        "Title": "Conan the Barbarian",
        "Year": "1982",
        "Role": "Conan",
        "Director": "John Milius",
        "Studio(s)": "Universal Pictures (US)\n20th Century Fox(Internationally)",
        "Rotten Tomatoes": "72%",
        "Notes": ""
    },
    {
        "Title": "Commando",
        "Year": "1985",
        "Role": "Colonel John Matrix",
        "Director": "Mark L. Lester",
        "Studio(s)": "20th Century Fox",
        "Rotten Tomatoes": "69%",
        "Notes": ""
    },
    {
        "Title": "Collateral Damage",
        "Year": "2002",
        "Role": "Gordy Brewer",
        "Director": "Andrew Davis",
        "Studio(s)": "Warner Bros. Pictures",
        "Rotten Tomatoes": "19%",
        "Notes": ""
    },
    {
        "Title": "Batman & Robin",
        "Year": "1997",
        "Role": "Dr. Victor Fries / Mr. Freeze",
        "Director": "Joel Schumacher",
        "Studio(s)": "Warner Bros. Pictures",
        "Rotten Tomatoes": "11%",
        "Notes": ""
    },
    {
        "Title": "Around the World in 80 Days",
        "Year": "2004",
        "Role": "Prince Hapi",
        "Director": "Frank Coraci",
        "Studio(s)": "Walt Disney Pictures\nBuena Vista International",
        "Rotten Tomatoes": "31%",
        "Notes": ""
    }
];


var JamieLeeCurtisMovies_Data = [
    {
        "Year": "1978",
        "Title": "Halloween",
        "Role": "Laurie Strode",
        "Notes": ""
    },
    {
        "Year": "1980",
        "Title": "The Fog",
        "Role": "Elizabeth Solley",
        "Notes": ""
    },
    {
        "Year": "1980",
        "Title": "Prom Night",
        "Role": "Kim Hammond",
        "Notes": "Nominated – Genie Award for Best Performance by a Foreign Actress"
    },
    {
        "Year": "1980",
        "Title": "Terror Train",
        "Role": "Alana Maxwell",
        "Notes": "Nominated – Saturn Award for Best Actress"
    },
    {
        "Year": "1981",
        "Title": "Escape from New York",
        "Role": "Narrator / Computer",
        "Notes": "Voice only, uncredited"
    },
    {
        "Year": "1981",
        "Title": "Roadgames",
        "Role": "Pamela \"Hitch\" Rushworth",
        "Notes": ""
    },
    {
        "Year": "1981",
        "Title": "Halloween II",
        "Role": "Laurie Strode",
        "Notes": ""
    },
    {
        "Year": "1982",
        "Title": "Halloween III: Season of the Witch",
        "Role": "Telephone Operator",
        "Notes": "Voice only, uncredited"
    },
    {
        "Year": "1983",
        "Title": "Trading Places",
        "Role": "Ophelia",
        "Notes": "BAFTA Award for Best Actress in a Supporting Role"
    },
    {
        "Year": "1984",
        "Title": "Love Letters",
        "Role": "Anna Winter",
        "Notes": ""
    },
    {
        "Year": "1984",
        "Title": "The Adventures of Buckaroo Banzai Across the 8th Dimension",
        "Role": "Sandra Banzai",
        "Notes": "In extended version"
    },
    {
        "Year": "1984",
        "Title": "Grandview, U.S.A.",
        "Role": "Michelle \"Mike\" Cody",
        "Notes": ""
    },
    {
        "Year": "1985",
        "Title": "Perfect",
        "Role": "Jessie",
        "Notes": ""
    },
    {
        "Year": "1987",
        "Title": "A Man in Love",
        "Role": "Susan Elliot",
        "Notes": ""
    },
    {
        "Year": "1987",
        "Title": "Amazing Grace and Chuck",
        "Role": "Lynn Taylor",
        "Notes": ""
    },
    {
        "Year": "1988",
        "Title": "Dominick and Eugene",
        "Role": "Jennifer Reston",
        "Notes": ""
    },
    {
        "Year": "1988",
        "Title": "A Fish Called Wanda",
        "Role": "Wanda Gershwitz",
        "Notes": "Nominated – BAFTA Award for Best Actress in a Leading Role\nNominated – Golden Globe Award for Best Actress – Motion Picture Musical or Comedy"
    },
    {
        "Year": "1989",
        "Title": "Blue Steel",
        "Role": "Megan Turner",
        "Notes": "Festival du Film Policier de Cognac Special Mention Award (For the acting performance)\nMystfest Film Festival Award for Best Actress"
    },
    {
        "Year": "1991",
        "Title": "Queens Logic",
        "Role": "Grace",
        "Notes": ""
    },
    {
        "Year": "1991",
        "Title": "My Girl",
        "Role": "Shelly DeVoto",
        "Notes": ""
    },
    {
        "Year": "1992",
        "Title": "Forever Young",
        "Role": "Claire Cooper",
        "Notes": ""
    },
    {
        "Year": "1994",
        "Title": "My Girl 2",
        "Role": "Shelly DeVoto Sultenfuss",
        "Notes": ""
    },
    {
        "Year": "1994",
        "Title": "Mother's Boys",
        "Role": "Judith \"Jude\" Madigan",
        "Notes": ""
    },
    {
        "Year": "1994",
        "Title": "True Lies",
        "Role": "Helen Tasker",
        "Notes": "American Comedy Award for Funniest Actress in a Motion Picture\nGolden Globe Award for Best Actress – Motion Picture Musical or Comedy\nSaturn Award for Best Actress\nNominated – Blockbuster Entertainment Award for Favorite Actress – Action/Adventure\nNominated – MTV Movie Award for Best Performance\nNominated – MTV Movie Award for Best Kiss\nNominated – Screen Actors Guild Award for Outstanding Performance by a Female Actor in a Supporting Role"
    },
    {
        "Year": "1996",
        "Title": "House Arrest",
        "Role": "Janet Beindorf",
        "Notes": ""
    },
    {
        "Year": "1997",
        "Title": "Fierce Creatures",
        "Role": "Willa Weston",
        "Notes": ""
    },
    {
        "Year": "1998",
        "Title": "Halloween H20: 20 Years Later",
        "Role": "Laurie Strode / Keri Tate",
        "Notes": "Nominated – Blockbuster Entertainment Award for Favorite Actress – Horror\nNominated – Saturn Award for Best Actress"
    },
    {
        "Year": "1998",
        "Title": "Homegrown",
        "Role": "Sierra Kahan",
        "Notes": ""
    },
    {
        "Year": "1999",
        "Title": "Virus",
        "Role": "Kelly Foster",
        "Notes": ""
    },
    {
        "Year": "2000",
        "Title": "Drowning Mona",
        "Role": "Rona Mace",
        "Notes": ""
    },
    {
        "Year": "2001",
        "Title": "The Tailor of Panama",
        "Role": "Louisa Pendel",
        "Notes": ""
    },
    {
        "Year": "2001",
        "Title": "Daddy and Them",
        "Role": "Elaine Bowen",
        "Notes": ""
    },
    {
        "Year": "2001",
        "Title": "Rudolph the Red-Nosed Reindeer and the Island of Misfit Toys",
        "Role": "Queen Camilla",
        "Notes": "Voice only"
    },
    {
        "Year": "2002",
        "Title": "Halloween: Resurrection",
        "Role": "Laurie Strode",
        "Notes": ""
    },
    {
        "Year": "2003",
        "Title": "Freaky Friday",
        "Role": "Tess Coleman / Anna Coleman",
        "Notes": "Nominated – Golden Globe Award for Best Actress – Motion Picture Musical or Comedy\nNominated – Satellite Award for Best Actress – Motion Picture Musical or Comedy\nNominated – Saturn Award for Best Actress"
    },
    {
        "Year": "2004",
        "Title": "Christmas with the Kranks",
        "Role": "Nora Krank",
        "Notes": ""
    },
    {
        "Year": "2005",
        "Title": "The Kid & I",
        "Role": "Herself",
        "Notes": ""
    },
    {
        "Year": "2008",
        "Title": "Beverly Hills Chihuahua",
        "Role": "Aunt Viv",
        "Notes": ""
    },
    {
        "Year": "2010",
        "Title": "You Again",
        "Role": "Gail",
        "Notes": ""
    },
    {
        "Year": "2011",
        "Title": "The Little Engine That Could",
        "Role": "Beverly \"Bev\"",
        "Notes": "Voice only"
    },
    {
        "Year": "2012",
        "Title": "From Up on Poppy Hill",
        "Role": "Ryoko Matsuzaki",
        "Notes": "Voice only, English version"
    },
    {
        "Year": "2014",
        "Title": "Veronica Mars",
        "Role": "Gayle Buckley",
        "Notes": ""
    },
    {
        "Year": "2015",
        "Title": "Spare Parts",
        "Role": "The Principal",
        "Notes": ""
    }
];

/**
 * Article middleware
 */
//exports.datasetByID = function(req, res, next, id) {
//    Article.findById(id).populate('user', 'displayName').exec(function(err, article) {
//        if (err) return next(err);
//        if (!article) return next(new Error('Failed to load article ' + id));
//        req.article = article;
//        next();
//    });
//};
