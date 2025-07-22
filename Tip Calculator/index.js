const cost = document.getElementById('cost');

const button = document.querySelector('.calculate-tip')


button.addEventListener('click', () => {
    total_cost = parseFloat(cost.value);
    var tip_percentage = 0.1;
    var tip = tip_percentage * total_cost
    

    return document.getElementById('display').innerText = `Total money spent is $${total_cost}. Tip percentage is 10%. Therefore, the tip to be paid is 🤑$${tip}🤑`
})
