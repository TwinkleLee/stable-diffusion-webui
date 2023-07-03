
let input = `? 1girl 4.4M
? ahoge 431k
? black dress 142k
? blush 2.1M
? child 37k
? dress 877k
? female child 14k
? hair between eyes 734k
? hairpods 3.6k
? jacket 531k
? medium hair 189k
? open clothes 306k
? open jacket 127k
? open mouth 1.6M
? outdoors 350k
? pink hair 451k
? ribbon 821k
? smile 2.0M
? solo 3.7M
? teeth 280k
? upper body 462k
? upper teeth only 71k
? white ribbon 34k
? yellow jacket 11k`;

let output = input.match(/^\?.+$/mg);
output = output.map(item => {
    let arr = item.split(" ");
    arr = arr.slice(1, arr.length - 1);
    return arr.join(" ");
});
output = output.join(",") + ",";
console.log(output);
