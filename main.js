bloodgive=1
blood=0
enemyhp=100
livestakens=0
upgradecost=15
ritualcost=2000
transformcount=1
livesgive=1
maxenemyhp=100
function givemeablood(){
    blood=blood+bloodgive
    enemyhp=enemyhp-bloodgive
    console.log("Blood: "+blood)
    console.log("Enemy HP: "+enemyhp)
    document.getElementById("bloodtaken").innerHTML = "Blood Taken: "+blood
    document.getElementById("enemyhp").innerHTML = "EnemyHP: "+enemyhp
    checkmystuff()
}
function checkmystuff(){
    if (enemyhp < 1){
        console.log("Smoking on Monster! HE DED!!!")
        livestakens=livestakens+livesgive
        document.getElementById("livestaken").innerHTML = "Lives Taken: "+livestakens
        enemyhp=maxenemyhp
        document.getElementById("enemyhp").innerHTML = "EnemyHP: "+enemyhp
    }
}
function upgradeblood(which){
    if (which == 1){
        if (blood >= upgradecost){
            blood=blood-upgradecost
            document.getElementById("bloodtaken").innerHTML = "Blood Taken: "+blood
            bloodgive=bloodgive+1
            upgradecost=upgradecost+15
            document.getElementById("costlabel").innerHTML = "Costs: "+upgradecost
}
}
}
function transform(){
    if (blood >= ritualcost){
        console.log("RITUAL")
        blood=blood-ritualcost
        document.getElementById("bloodtaken").innerHTML = "Blood Taken: "+blood
        livesgive=livesgive+1
        bloodgive=bloodgive+5
        ritualcost=ritualcost+2000
        document.getElementById("costlabel2").innerHTML = "Costs: "+ritualcost
        maxenemyhp=maxenemyhp+100
        document.getElementById("enemyhp").innerHTML = "Enemy HP: "+enemyhp
        transformcount=transformcount+1


    }

}