//String: greeting
{
    let name = prompt('Як вас звати?');
    alert ("Привіт, "+ name+"!");
}

//String: gopni4ek
{
    let str = prompt('Введіть рядок');
    let str1 = str.split(',');
    let text = str1.join(" блін,");
    alert (text);
}

//String: capitalize
{
    let str = "cANBerRa";
    let result = str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();
    console.log(result);
}

//String: word count
{
    let str = prompt('Введіть рядок');
    let mas = str.split(' ');
    console.log (mas.length);
}

//String: credentials
{
    let name_1 = prompt('Введіть прізвище');
    let name_2 = prompt('Введіть ім\'я');
    let name_3 = prompt('Введіть по-батькові');
    let str_1 = name_1.trim();
    let str_2 = name_2.trim();
    let str_3 = name_3.trim();
    let result_1 = str_1[0].toUpperCase() + str_1.slice(1, str_1.length).toLowerCase();
    let result_2 = str_2[0].toUpperCase() + str_2.slice(1, str_2.length).toLowerCase();
    let result_3 = str_3[0].toUpperCase() + str_3.slice(1, str_3.length).toLowerCase();
    let fullName = result_1 + " " + result_2 + " " + result_3;
    console.log (fullName);
}

//String: beer
{
    let str = "Було жарко. Василь пив пиво вприкуску з креветками"
    let result = "\"" + str.split(' ').slice(0, 4).join(" ") + " чай " + str.split(' ').slice(5, str.length).join(" ") + "\"";
    console.log(result);
}

//String: no tag
{
    let str = "якийсь текст, в якому є один тег <br/> і всяке інше"
    let result = "\"" + str.slice(0, str.indexOf(" <")) + str.slice(str.indexOf("> ")+1, str.length) + "\"" ;
    console.log(result);
}

//String: big tag 
{
    let str = "якийсь текст, в якому є один тег <br/> і всяке інше"
    let result = "\"" + str.slice(0, str.indexOf(" <")) + str.slice(str.indexOf(" <"), str.indexOf(">")+1).toUpperCase() + str.slice(str.indexOf("> ")+1, str.length) + "\"" ;
    console.log(result);
}

//String: new line
{
    let str = prompt('Введіть рядок, для нового рядка використовуйте позначення \\n');
    let result = str.split('\\n').join("\n");
    console.log (result);
}

//String: youtube
{
    let str = prompt('Введіть посилання на відео з youtube');
    const reg = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/;
    let id = str.match(reg)[1];
    let result = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/" + id + " title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>";
    document.write(result);
}
