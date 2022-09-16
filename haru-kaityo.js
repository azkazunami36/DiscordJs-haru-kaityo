const { Client, GatewayIntentBits, Partials } = require('discord.js'),
    client = new Client({
        partials: [Partials.Channel],
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildVoiceStates,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.DirectMessages,
            GatewayIntentBits.MessageContent
        ]
    });
const config = require('./config-haru-kaityo-bots.json');//トークンとかが入ったやつを入れる部分
client.on('ready', () => {
    var now = new Date();
    console.log("Bot準備完了～");
    client.user.setActivity('はるとを乗っ取るゲーム', { type: "PLAYING" }, { status: "online" });
});


client.on('messageCreate', message => {
    if (message.author.bot) return; //BOTのメッセージには反応しない
    var my_key = message.mentions.users.has(client.user.id) || message.mentions.roles.some(r => [client.user.username].includes(r.name)) ? true : false;

    if (my_key || message.content.match(/ぼっと|はるかいちょうぼっと|はる会長ボット|はる会長ぼっと|はる会長bot|はる会長Bot|はる会長BOT/)) {
        message.reply('はーいっにゃー')//送信
        console.log("はーいっにゃーを送信済み");
    } else if (message.content.match(/にゃーん|にゃ〜ん|ニャーン|にゃん|nyan|神|かみ/)) {
        message.channel.send('にゃ～ん')//送信
        console.log("にゃ～んを送信済み");
    } else if (message.content === "h.stop") {
        message.channel.send('終了するには管理人か確認しないと...')//送信
        console.log("Bot終了を実行中...");
        setTimeout(() => {
            if (message.author.id === "835789352910716968") {//かずなみかを確認する
                message.channel.send('確認できたんで落ちま～す')//送信
                console.log("Bot終了中...");
                setTimeout(() => { client.destroy(); }, 500);//時間指定して、そのあとDiscordからbotを切断する
            } else {//当てはまらない場合、
                message.channel.send('なんだ違う人か')//送信
                console.log("不正を検知。終了を中断");
            }
        }, 2000);;//時間指定


    } else if (message.content.match === "h.rule") {
        console.log("ルールを表示");
        message.channel.send({
            embeds: [{
                title: 'ルールはまだ見れません...',
                url: '',
                fields: [
                    { name: '一覧を作成中...', value: '内容はまだありません' },
                    { name: '一覧を作成中...', value: '内容はまだありません' }
                ],
                color: 7506394,
                timestamp: new Date()
            }]
        })
    } else if (message.content.match(/ぴえん|ピエン|pien|構って|かまって|構う|かまう|🥺/)) {
        let react = "🥺";
        message
            .react(react)
            .then(message => console.log("リアクション: 🥺"));

    } else if (message.content.match(/うえーん|なく|泣く|うぇーん|悲しい|痛い|悲しい|さみしい|寂しい|嫌い|😭/)) {
        let react = "😭";
        message
            .react(react)
            .then(message => console.log("リアクション: 😭"))
    } else if (message.content.match(/やったー|ヤッター|嬉しい|うれしい|登場|とうじょう|発売|はつばい|いいこと|良いこと|😆/)) {
        let react = "😆";
        message
            .react(react)
            .then(message => console.log("リアクション: 😆"))
    } else if (message.channel.name == "925831750578487336") {


        const ch_name = "925848438803931236";
        client.channels.forEach(channel => {
            if (channel.name === ch_name) {
                channel.send({
                    embed: {
                        title: message.content,
                        color: 0x800080,
                        timestamp: new Date(),
                        footer: {
                            text: "#審査をしたい場所のチャンネル名の審査ログ"
                        },
                        thumbnail: {
                            url:
                                "https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png"
                        },
                        fields: [
                            {
                                name: "チャンネル",
                                value: `${message.channel.name} (${message.channel.id})`
                            },
                            {
                                name: "ユーザー",
                                value: `${message.author.username} (${message.author.id})`
                            }
                        ]
                    }
                });
            }
        });
    } else if (message.content === "tembed") {
        message.channel.send(
            {
                embed: {
                    author: {
                        name: "はるbots",
                        url: "https://youtube.com/channel/UCy5wRn90QBgpaQbS_TV842w", // nameプロパティのテキストに紐付けられるURL
                        icon_url: client.user.avatarURL
                    },
                    title: "テスト",
                    url: "https://youtube.com/channel/UCy5wRn90QBgpaQbS_TV842w", // titleプロパティのテキストに紐付けられるURL
                    description: "内容がまだ完成していません。 [YouTube URL](https://youtube.com/channel/UCy5wRn90QBgpaQbS_TV842w)\n" + //URLを埋め込むこともできる
                        "***太文字テストです***", //embedの中でもMarkDownを利用できます
                    color: 7506394,
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL,
                        text: "©️ SumWave 2021 | はる会長のサーバー"
                    },
                    thumbnail: {
                        url: "https://cdn.discordapp.com/embed/avatars/2.png"
                    },
                    image: {
                        url: "https://cdn.discordapp.com/embed/avatars/0.png"
                    },
                    fields: [
                        {
                            name: "field :one:",
                            value: "*ここはfield 1の内容だよ*"
                        },
                        {
                            name: "field :two:",
                            value: "~~ここはfield 2の内容だよ~~"
                        },
                        {
                            name: "field :three:",
                            value: "__ここはfield 3の内容だよ__"
                        },
                        {
                            name: "はる会長のYouTube",
                            value: "[リンク！/Link!](https://discordapp.com)",
                            inline: true
                        },
                        {
                            name: "あんこかずなみ36のYouTube",
                            value: "[リンク！/Link!](https://discordapp.com)",
                            inline: true
                        }
                    ]
                }
            }
        )
    } else if (message.content.startsWith(config.prefix)) { //ボットのプレフィックスからメッセージが始まっているか確認
        args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        command = args.shift().toLowerCase();
        console.log(command); //コマンド内容コンソール出力＆動作確認
        if (command == "help") { //コマンド名
            message.channel.send({
                embeds: [{
                    title: "ヘルプ",
                    description: "全てのコマンドの初めに`" + config.prefix + "`をつける必要があります。",
                    url: '',
                    fields: [
                        { name: "ヘルプ", value: "`help`" },
                        { name: "まい", value: "`mai`" },
                        { name: "伊吹", value: "`ibuki`" },
                        { name: "あんこかずなみ36", value: "`ankokazunami36`" }
                    ],
                }]
            });
        } else if (command == "mai") { //コマンド名
            message.channel.send({
                embeds: [{
                    title: "mai",
                    description: "まいchはミルダム配信者、ですいーたーリスナー",
                    fields: [
                        { name: "mai", value: "`" + config.prefix + "`" }
                    ],
                }]
            });
        } else if (command == "ibuki") {
            message.channel.send("ibuki");
        } else if (command == "ankokazunami36") {
            message.channel.send("ankokazunami36");
        } else {
            message.channel.send("有効なコマンド名ではありません。`" + config.prefix + "help`でコマンドを確認できます。");
        };
    };
})

client.login(config.token);