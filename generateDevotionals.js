const fs = require("fs")

const scriptures = [
"Proverbs 3:5",
"Philippians 4:13",
"Isaiah 41:10",
"Psalm 23:1",
"Romans 8:28",
"Matthew 6:33",
"Joshua 1:9",
"Psalm 46:1",
"Hebrews 11:1",
"John 14:27"
]

const titles = [
"Trusting God Daily",
"Strength Through Christ",
"Faith Over Fear",
"Walking with the Shepherd",
"God Works All Things",
"Seeking God's Kingdom",
"Courage for the Journey",
"God Our Refuge",
"Living by Faith",
"Peace from Christ"
]

const messages = [
"God invites us to trust Him fully even when circumstances are unclear. Faith grows when we choose to rely on His wisdom above our own understanding.",
"The strength of a believer does not come from human effort but from Christ who empowers us daily.",
"Fear loses its grip when we remember that God walks beside us in every situation.",
"Like a shepherd guiding sheep, God leads His children through both peaceful and difficult seasons.",
"Even when life appears chaotic, God is working behind the scenes for our good.",
"When God becomes our first priority, everything else falls into proper place.",
"Courage grows when we remember God's promises and presence.",
"God remains a safe refuge when life's storms rage around us.",
"Faith means trusting God even before we see the outcome.",
"Christ offers a peace the world cannot give."
]

const prayers = [
"Lord, help me trust You with every part of my life today.",
"Father, strengthen my heart and faith today.",
"God, replace my fears with confidence in Your presence.",
"Shepherd of my soul, guide me today.",
"Lord, help me see Your purpose even in difficulty.",
"Father, help me seek You above all things.",
"God, give me courage to follow Your path today.",
"Lord, be my refuge and strength.",
"Help me walk by faith and not by sight.",
"Jesus, fill my heart with Your peace."
]

let devotionals = []

for (let i = 1; i <= 365; i++) {

const index = i % titles.length

devotionals.push({
day: i,
title: titles[index],
scripture: scriptures[index] + " NKJV",
message: messages[index],
reflection: [
"What is God teaching me through today's scripture?",
"How can I apply this truth today?"
],
action: "Spend five minutes in prayer reflecting on today's verse.",
prayer: prayers[index]
})

}

fs.writeFileSync(
"devotionals365.json",
JSON.stringify(devotionals, null, 2)
)

console.log("365 devotionals generated successfully.")
