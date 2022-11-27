// console.log("Link successful")


let submitbtn=document.getElementById('submit')

submitbtn.addEventListener('click', function(){
    let html= `<h1> ${document.getElementById('breed').value} Price 2022- What To Expect? </h1>
    <br>
    The ${document.getElementById('breed').value} is a ${document.getElementById('DogGroup').value} 


    <span class="edit">breed known for its intelligence and strength . Due to this, they are widely used as rescue dogs or guard dogs and are hence the perfect protector for your house. They also require less grooming maintenance and are quite easy to train. </span>


    Looking to add a ${document.getElementById('breed').value} to your household? We’ve got you covered!
    After analysing over ${document.getElementById('ads').value} advertisements for ${document.getElementById('breed').value} puppy prices we’ve put together a detailed price guide explaining the cost that most ${document.getElementById('breed').value} owners are likely to incur.
    <br>
    <h1> ${document.getElementById('breed').value} Price - How Much Does a ${document.getElementById('breed').value} Cost? </h1>
    <br>
    Here are some costs you can expect:
    <br>
    •	 The average cost of a ${document.getElementById('breed').value} puppy from a reputed breeder is around ${Math.ceil(eval(document.getElementById('pupavg').value))}. You can read more here.
    <br>
    •	The minimum price of a ${document.getElementById('breed').value} puppy is 
    ${Math.ceil(eval(document.getElementById('pupmin').value))} and the maximum is around ${Math.ceil(eval(document.getElementById('pupmax').value))}
    
    <span class="edit">
    •	The cost of raising a ${document.getElementById('breed').value} in the first year is around ${Math.ceil(eval(document.getElementById('pupavg').value))+Math.ceil(eval(document.getElementById('midfood').value)*12)+Math.ceil(eval(document.getElementById('avghealthcost').value)) + 1000}
    </span>

    <br>
    •	The average annual expense of owning a ${document.getElementById('breed').value} after the first year is around ${document.getElementById('annualcost').value}, but this may vary greatly.
    •	${document.getElementById('breed').value}s live up to ${document.getElementById('LifeSpan').value} years, this means that the lifetime cost of owning a ${document.getElementById('breed').value} is around ${document.getElementById('lifetimecost').value}. 
    <br>
    Hyperlink
    <br>
    <h1>Initial Costs - The Cost of Owning a ${document.getElementById('breed').value}</h1>
    Buying a ${document.getElementById('breed').value} puppy from a reputed breeder could cost you anywhere between ${document.getElementById('pupmin').value} and ${document.getElementById('pupmax').value} depending on the gender and genetics of the pup. Puppies born to champion parents could cost more than ${eval(document.getElementById('pupmax').value) + 200}.
    <br>
    Adopting a ${document.getElementById('breed').value} puppy may be a little cheaper. Most shelters charge around $300-$600 as adoption fees and may cover the puppy’s initial vaccinations and neutering. 
    <br>
    <br>
    However, you may have to spend more money on training the pup to make it more social and friendly. Adopted pups may also be carrying diseases if they weren’t raised in hygienic conditions, so make sure you adopt them only from shelters that adhere to health protocols.
    <br>
    <h1 class="edit"> Basic Supplies and Equipment </h1>
    •	Food and water bowl: $10-$20 each
    <br>
    •	Toys: Chew toys and play toys generally cost $15-$30 per toy.
    <br>
    •	<span class="edit">Dog Bed(optional but recommended) will cost around $50-$100</span>
    <br>
    •	Crate (optional but recommended) $100-$450
    •	Dog leash: $10-$30
    •	Body harness: $25-$45
    Overall the cost for dog equipment should lie between $210-$675 or around $440 on average. Eliminating the optional costs, you could spend around $60-$130 or an average of around $95.
    <h1>${document.getElementById('breed').value} Medical Costs </h1>
    ${document.getElementById('breed').value}s are susceptible to many diseases and ailments. ___LIST AILMENTS__
    This is why your ${document.getElementById('breed').value}’s medical health should be your top priority. Make sure to provide your dog with a healthy diet and not overfeed it. Also, vaccinate it and provide it with sufficient exercise 
    <br>
    On average, ${document.getElementById('breed').value} owners have to spend around ${document.getElementById('avghealthcost').value} annually on medical expenses such as tick and flea prevention, vaccinations, health checkups, dental care, etc. Here’s a detailed breakdown of your medical costs:
   <br>
   <br>

    <h1>Cost of Dog Food for ${document.getElementById('breed').value} </h1>
    ${document.getElementById('breed').value}s are medium-sized dogs standing at around ${document.getElementById('Height').value} inches measured from feet to the shoulder. The adults on average weigh ${document.getElementById('Weight').value} pounds. For a dog this size, you should feed 4-6 cups of kibble per day. Males generally need a little more food than females. Since adult ${document.getElementById('breed').value}s are to be fed 2 times a day, this amounts to 120-180 cups of kibble per month (or around ${document.getElementById('monthfoodreq').value} pounds of dog food per month) 
    •	The cheapest dog food will cost you around ${document.getElementById('cheapfood').value} per month (around ${Math.round(eval(document.getElementById('cheapfood').value)/eval(document.getElementById('monthfoodreq').value))} per pound)
    •	Mid-range dog food will cost around ${document.getElementById('midfood')} per month (around ${Math.round(eval(document.getElementById('midfood').value)/eval(document.getElementById('monthfoodreq').value))} per pound)
    •	Premium grade dry dog food will cost around ${document.getElementById('expfood').value} per month (around ${Math.round(eval(document.getElementById('expfood').value)/eval(document.getElementById('monthfoodreq').value))} per pound)
    Depending on the quality of dog food you buy, your dog food costs should lie between ${Math.round(eval(document.getElementById('cheapfood').value)*12)}-${Math.round(eval(document.getElementById('expfood').value)*12)} per year, or an average of ${Math.round(eval(document.getElementById('midfood').value)*12)} per year.
    <h1>Other Costs of Owning a ${document.getElementById('breed').value}</h1>
    Grooming
   <br>
    Training
    <br>
    Pet sitting costs
     <Generally, ${document.getElementById('breed').value} boarding costs are around $40-$60 per day (with separate visit fees) depending on location. Pet sitters charge even more than this (around $60 a day on average)>
    Traveling
    Traveling with a ${document.getElementById('breed').value} by flight can cost $130 with separate layover fees.
    Dog Walker
     As mentioned before, ${document.getElementById('breed').value}s require a lot of exercise daily. It is recommended that they get at least 1-2 hours of exercise per day. Dog walkers charge $30-$50 per hour, so you may have to pay $60-$100 daily. This brings your dog walking expenses to more than $1000 a month on average.
    Summary: ${document.getElementById('breed').value} Price 2022
    We hope this cost guide helps you estimate the price of owning a ${document.getElementById('breed').value}.
    To sum up:
    The purchase costs are ${Math.ceil(eval(document.getElementById('pupavg').value))} for a puppy from a reputed breeder.  

    <span class="edit">
    The cost of raising a ${document.getElementById('breed').value} in the first year is around ${Math.ceil(eval(document.getElementById('pupavg').value))+Math.ceil(eval(document.getElementById('midfood').value)*12)+Math.ceil(eval(document.getElementById('avghealthcost').value)) + 1000}
    </span> 

    including the basic equipment and medical expenses. The dog food costs are on average over ${Math.round(eval(document.getElementById('midfood').value)*12)} a year. Other expenses (training, grooming, travel, boarding, dog walker) can be around $7,000. This brings the lifetime cost of owning a ${document.getElementById('breed').value} over ${document.getElementById('lifetimecost').value}.
    
    `

    document.getElementById('article').innerHTML= html;
})