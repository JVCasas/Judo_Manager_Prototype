// Classes
class BurgerMenu
{
    constructor(menuButton, menu)
    {
        this.menuButton = document.querySelector(menuButton);
        this.menu = document.querySelector(menu);

        this.menuButton.addEventListener('click', () => {this.activeHiddenBars(this.menu)});
    }
    
    activeHiddenBars(bar)
    {
        bar.classList.toggle('active');
    }
}

class Carroussel
{
    constructor(track, itemsName, time = 0, orientation = 'X', direction = 'normal')
    {
        this.track = document.querySelector(track);
        this.items = document.querySelectorAll(`${track} > ${itemsName}`)
        this.counter = 1;
        this.firstItemClone = this.items[0].cloneNode(true);
        this.lastItemClone = this.items[this.items.length - 1].cloneNode(true);
        this.orientation = orientation;
        this.direction = direction;
        this.isMoving = false;
        this.time = time;

        if (this.orientation == 'X')
        {
            this.itemSize = this.items[0].clientWidth;
        }
        if (this.orientation == 'Y')
        {
            this.itemSize = this.items[0].clientHeight;
        }

        this.insertClones();

        let resizeTimer;
        window.addEventListener('resize', () => {this.verifyWindowModification(resizeTimer)});
        this.initStandardPosition()
        this.addLooping();
        this.addAutoMove(this.time);
    }

    verifyWindowModification(timer)
    {
        clearTimeout(timer);
        timer = setTimeout(() => {this.updateDimensions()}, 150);
    }

    updateDimensions()
    {
        if (this.orientation == 'X')
        {
            this.itemSize = this.track.children[0].clientWidth;
        }
        if (this.orientation == 'Y')
        {
            this.itemSize = this.track.children[0].clientHeight;
        }
        this.track.style.transition = 'none';
        this.track.style.transform = `translate${this.orientation}(-${this.counter * this.itemSize}px)`;
    }

    addButtons(nextBtn, prevBtn)
    {
        this.nextBtn = document.getElementById(nextBtn);
        this.prevBtn = document.getElementById(prevBtn);

        this.nextBtn.addEventListener('click', ()=> this.move(1))
        this.prevBtn.addEventListener('click', ()=> this.move(-1))
    }

    insertClones()
    {
        this.track.appendChild(this.firstItemClone);
        this.track.insertBefore(this.lastItemClone, this.track.children[0])
    }

    

    move(step)
    {
        if (this.isMoving) return;
        if (this.counter <= 0) return;
        if (this.counter >= this.track.children.length - 1) return;
        
        let localStep = step;
        if (this.direction == 'inverted')
        {
            localStep *= -1;
        }

        this.counter += localStep;

        this.track.style.transition = "transform 1s ease-in-out";
        this.track.style.transform = `translate${this.orientation}(-${this.counter * this.itemSize}px)`;
    }

    initStandardPosition()
    {
        this.track.style.transform = `translate${this.orientation}(-${this.counter * this.itemSize}px)`;
    }

    looping()
    {
        if(this.track.children[this.counter] === this.firstItemClone)
        {
            this.counter = 1;
            this.track.style.transition = 'none';
            this.track.style.transform = `translate${this.orientation}(-${this.counter * this.itemSize}px)`;
        }
        if(this.track.children[this.counter] === this.lastItemClone)
        {
            this.counter = this.track.children.length - 2;
            this.track.style.transition = 'none';
            this.track.style.transform = `translate${this.orientation}(-${this.counter * this.itemSize}px)`;
        }
    }

    addLooping()
    {
        this.track.addEventListener('transitionend', () => {this.looping()})
    }

    addAutoMove(time)
    {
        if (time == 0) return;
        setInterval(() => {this.move(1)}, time)
    }
}

class Dropdown
{
    constructor(trigger, list)
    {
        this.trigger = document.querySelector(trigger);
        this.list = document.querySelector(list);

        this.trigger.addEventListener('click', () => {this.toggleDropdown(this.list)})
    }

    toggleDropdown(list)
    {
        list.classList.toggle('active-dropdown');
    }
}