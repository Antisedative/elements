
client.on("message", msg => {
    command;
});

function comm(msg) {

        if (msg.author.bot || !msg.content.startsWith(prefix))
        return;

    const args = msg.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    if (cmd == 'чупапи') {
        const timeTaken = Date.now() - msg.createdTimestamp; // Попытка реализации PING
        msg.reply(`муняня ${timeTaken}ms.`)
    }

    if (cmd == 'натан' || cmd == 'oni') {
        msg.reply(`:poop:`);
    }

    if (cmd == 'кирилл' || cmd == 'bandos') {
        msg.reply(`пидорас(асу)`);
    }

    if (cmd == 'монета') {
        msg.channel.send('Монета подбрасывается...')

        let random = Math.floor(Math.random() * 4) + 1; // Объявление переменной random - она вычисляет случайное число от 1 до 3

        if (random === 1) { // Если вычислено число 1, то выпадает орёл.
            msg.channel.send(':full_moon: Орёл!')
        } else if (random === 2) { // Если вычислено число 2, то выпадает решка.
            msg.channel.send(':new_moon: Решка!')
        } else if (random === 3) { // Если вычислено число 3, то монета падает ребром.
            msg.channel.send(':last_quarter_moon: Монета упала ребром!')
        }
    }

    if (cmd == 'name') {
        let name = [ // Объявление массива name и занесение в него большого количества имён
            'Абрам', ' Аваз', ' Аввакум', ' Август', ' Августин',
            ' Авдей', ' Авраам', ' Автандил', ' Агап', ' Агафон',
            ' Аггей', ' Адам', ' Адис', ' Адольф', ' Адриан',
            ' Азамат', ' Айдар', ' Айнур', ' Айрат', ' Аким',
            ' Алан', ' Алей', ' Александр', ' Алексей', ' Али',
            ' Альберт', ' Альфред', ' Амадей', ' Амадеус',
            ' Амаяк', ' Амвросий', ' Ананий', ' Анастасий',
            ' Анатолий', ' Анвар', ' Ангел', ' Андоим', ' Андрей',
            ' Аникита', ' Антон', ' Арам', ' Арий', ' Аристарх',
            ' Аркадий', ' Арман', ' Арно', ' Арнольд', ' Арон', ' Арсен',
            ' Арсений', ' Арслан', ' Артем', ' Артемий', ' Артур', ' Архип', ' Аскар', ' Аскольд', ' Аслан', ' Афанасий', ' Ахмет', ' Ашот', ' Бальтазар', ' Бежен', ' Бенедикт', ' Берек', ' Бернард',
            ' Бертран', ' Богдан', ' Болеслав', ' Борис', ' Бронислав',
            ' Булат', ' Вадим', ' Валентин', ' Валерий', ' Вальтер',
            ' Варфоломей', ' Василий', ' Вацлав', ' Велизар', ' Венедикт', ' Вениамин', ' Викентий', ' Виктор', ' Вилли', ' Вильгельм', ' Виссарион', ' Виталий', ' Витольд', ' Владимир', ' Владислав', ' Владлен', ' Володар', ' Вольдемар', ' Всеволод', ' Вячеслав', ' Гавриил', ' Галактион', ' Гарри', ' Гастон', ' Гаяс', ' Гевор', ' Геннадий', ' Генрих', ' Георгий', ' Геракл', ' Геральд', ' Герасим', ' Герман', ' Глеб', ' Гордей', ' Гордон', ' Горислав', ' Градимир', ' Григорий', ' Гурий', ' Густав', ' Давид', ' Дамир', ' Даниил', ' Даниэль', ' Данияр', ' Дарий', ' Дементий', ' Демид', ' Демосфен', ' Демьян', ' Денис', ' Джамал', ' Джордан', ' Дмитрий', ' Добрыня', ' Дональд', ' Донат', ' Дорофей', ' Евгений', ' Евграф', ' Евдоким', ' Евсевий', ' Евсей', ' Евстафий', ' Егор', ' Елеазар', ' Елисей', ' Емельян', ' Еремей', ' Ермолай', ' Ерофей', ' Ефим', ' Ефрем', ' Жан', ' Ждан', ' Жорж', ' Захар', ' Зиновий', ' Ибрагим', ' Иван', ' Игнатий', ' Игорь', ' Илларион', ' Ильдар', ' Ильнар', ' Ильнур', ' Илья', ' Ильяс', ' Иннокентий', ' Иоанн', ' Иосиф', ' Ипполит', ' Искандер', ' Ислам', ' Камиль', ' Карим', ' Карл', ' Кирилл', ' Клим', ' Кондрат', ' Константин', ' Корней', ' Кузьма', ' Лавр', ' Лаврентий', ' Лев', ' Леон', ' Леонид', ' Леонтий', ' Леопольд', ' Лука', ' Лукьян', ' Любим', ' Макар', ' Максим', ' Максимилиан', ' Марат', ' Марк', ' Марсель', ' Мартин', ' Матвей', ' Мирон', ' Мирослав', ' Митрофан', ' Михаил', ' Михей', ' Мишель', ' Мстислав', ' Мурат', ' Муслим', ' Назар', 'Абрам', ' Аваз', ' Аввакум', ' Август', ' Августин', ' Авдей', ' Авраам', ' Автандил', ' Агап', ' Агафон', ' Аггей', ' Адам', ' Адис', ' Адольф', ' Адриан', ' Азамат', ' Айдар', ' Айнур', ' Айрат', ' Аким', ' Алан', ' Алей', ' Александр',
            ' Алексей', ' Али', ' Альберт', ' Альфред', ' Амадей', ' Амадеус', ' Амаяк', ' Амвросий', ' Ананий', ' Анастасий', ' Анатолий', ' Анвар', ' Ангел', ' Андоим', ' Андрей', ' Аникита', ' Антон', ' Арам', ' Арий', ' Аристарх', ' Аркадий', ' Арман', ' Арно', ' Арнольд', ' Арон', ' Арсен', ' Арсений', ' Арслан', ' Артем', ' Артемий', ' Артур', ' Архип', ' Аскар', ' Аскольд', ' Аслан', ' Афанасий', ' Ахмет', ' Ашот', ' Бальтазар', ' Бежен', ' Бенедикт', ' Берек', ' Бернард', ' Бертран', ' Богдан', ' Болеслав', ' Борис', ' Бронислав', ' Булат', ' Вадим', ' Валентин', ' Валерий', ' Вальтер', ' Варфоломей', ' Василий', ' Вацлав', ' Велизар', ' Венедикт', ' Вениамин', ' Викентий', ' Виктор', ' Вилли', ' Вильгельм', ' Виссарион', ' Виталий', ' Витольд', ' Владимир', ' Владислав', ' Владлен', ' Володар', ' Вольдемар', ' Всеволод', ' Вячеслав', ' Гавриил', ' Галактион', ' Гарри', ' Гастон',
            ' Гаяс', ' Гевор', ' Геннадий', ' Генрих', ' Георгий', ' Геракл',
            ' Геральд', ' Герасим', ' Герман', ' Глеб', ' Гордей', ' Гордон',
            ' Горислав', ' Градимир', ' Григорий', ' Гурий', ' Густав',
            ' Давид', ' Дамир', ' Даниил', ' Даниэль', ' Данияр',
            ' Дарий', ' Дементий', ' Демид', ' Демосфен',
            ' Демьян', ' Денис', ' Джамал', ' Джордан', ' Дмитрий', ' Добрыня',
            ' Дональд', ' Донат', ' Дорофей', ' Евгений', ' Евграф', ' Евдоким', ' Евсевий', ' Евсей', ' Евстафий', ' Егор', ' Елеазар', ' Елисей', ' Емельян', ' Еремей', ' Ермолай', ' Ерофей', ' Ефим', ' Ефрем', ' Жан', ' Ждан', ' Жорж', ' Захар', ' Зиновий', ' Ибрагим', ' Иван', ' Игнатий', ' Игорь', ' Илларион', ' Ильдар', ' Ильнар', ' Ильнур', ' Илья', ' Ильяс', ' Иннокентий', ' Иоанн', ' Иосиф', ' Ипполит', ' Искандер', ' Ислам', ' Камиль', ' Карим', ' Карл', ' Кирилл', ' Клим', ' Кондрат', ' Константин', ' Корней', ' Кузьма', ' Лавр', ' Лаврентий', ' Лев', ' Леон', ' Леонид', ' Леонтий', ' Леопольд', ' Лука', ' Лукьян', ' Любим', ' Макар', ' Максим', ' Максимилиан', ' Марат', ' Марк', ' Марсель', ' Мартин', ' Матвей', ' Мирон', ' Мирослав', ' Митрофан', ' Михаил', ' Михей', ' Мишель', ' Мстислав', ' Мурат',
            ' Муслим', ' Назар'
        ];

        let RandElement = name[Math.floor(Math.random() * (name.length))]; // Выбор случайного элемента из массива
        msg.channel.send(RandElement) // Отправка сообщения со случайным элементом из массива в чат
    }

    if (cmd == 'roll') {
        let rand = Math.ceil(Math.random() * 100);
        msg.channel.send(`Ваше число ${rand}`);
    }

    if (cmd == 'clear') {
        const arggs = msg.content.split(' ').slice(1); // Все аргументы за именем команды с префиксом
        const amount = arggs.join(' '); // Количество сообщений, которые должны быть удалены
        if (!amount) return msg.channel.send('Вы не указали, сколько сообщений нужно удалить!'); // Проверка, задан ли параметр количества
        if (isNaN(amount)) return msg.channel.send('Это не число!'); // Проверка, является ли числом ввод пользователя 

        if (amount > 100) return msg.channel.send('Вы не можете удалить 100 сообщений за раз'); // Проверка, является ли ввод пользователя числом больше 100
        if (amount < 1) return msg.channel.send('Вы должны ввести число меньше чем 1'); // Проверка, является ли ввод пользователя числом меньше 1

        async function delete_messages() { // Объявление асинхронной функции

            await msg.channel.messages.fetch({
                limit: amount
            }).then(messages => {
                msg.channel.bulkDelete(messages)
                msg.channel.send(`Удалено ${amount} сообщений!`)
            })
        };
        delete_messages(); // Вызов асинхронной функции
    }

    if (cmd == 'command' || cmd == 'команды') {
        msg.channel.send(`Доступные команды:\n !монета - подбросить монету\n !clear (число) - почистить чат\n !name - случайное имя\n !чупапи - муняня\n !command / !команды - список всех команд\n !roll - случайное число 0-100`);
        msg.channel.send("Супер команда:\n !натан / !oni");
    }

export default comm()