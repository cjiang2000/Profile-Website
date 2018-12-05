function bouncer(event){
    var hero=[]
    var list = document.getElementById('holo');
    var text=document.getElementById('input1').value;
    $(list).empty();
    var rhymes = "http://rhymebrain.com/talk?function=getRhymes&word="+text
    $.ajax({
        url: rhymes,
        success: function (x) {
            for(thing in x){
                if(hero.length<50){
                    hero.push(x[thing].word)
                }
            }
            console.log(hero)
            for(item in hero){
                console.log(hero[item])
                $.ajax({
                    url: '//en.wikipedia.org/w/api.php',
                    stuf: hero[item],
                    data: { action: 'query', list: 'search', srsearch: '"'+hero[item]+'"', format: 'json' },
                    dataType: 'jsonp',
                    success: function (x) {
                        console.log()
                        var thing;
                        for(thing in x.query.search){
                            var thinger = x.query.search[thing].title;
                            var op=thinger.replace(this.stuf, text)
                            if(thinger!=this.stuf && thinger.includes(this.stuf)){
                                var entry = document.createElement('li');
                                entry.appendChild(document.createTextNode(op));
                                entry.appendChild(document.createTextNode('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"'+thinger+'"'));
                                list.appendChild(entry);
                            }
                        }
                    }
                });
            }
        }
    });
    
    //call ajax for rhymes
    
    var snd = new Audio('boing.mp3');
    snd.play();
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $(event.target).addClass('animated rubberBand').one(animationEnd, function() {
            $(this).removeClass('animated rubberBand');
        });
        
}
