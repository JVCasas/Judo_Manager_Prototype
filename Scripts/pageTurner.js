class PageTurner
{
    constructor(pages, prevButton, nextButton)
    {
        this.pages = document.querySelectorAll(pages);
        this.prevButton = document.querySelector(prevButton);
        this.nextButton = document.querySelector(nextButton);
        this.pagesNumber = this.pages.length;
        this.currentPage = 0;

        this.nextButton.addEventListener('click', () => this.moveNext());
        this.prevButton.addEventListener('click', () => this.movePrev());
        
        this.updateButtons()
    }

    movePage(pace)
    {
        this.pages[this.currentPage].classList.toggle('active');
        this.currentPage += pace;
        this.pages[this.currentPage].classList.toggle('active');

        this.updateButtons()
    }

    moveNext()
    {
        if (this.currentPage < this.pagesNumber - 1)
        {
            this.movePage(1);
        }
    }

    movePrev()
    {
        if (this.currentPage > 0)
        {
            this.movePage(-1);
        }
    }

    updateButtons()
    {
        if (this.currentPage === 0)
        {
            this.prevButton.style.visibility = 'hidden';
            this.prevButton.style.transition = '0s';
        }
        else
        {
            this.prevButton.style.visibility = 'visible';
            this.prevButton.style.transition = '';
        }

        if (this.currentPage === this.pagesNumber - 1)
        {
            this.nextButton.style.visibility = 'hidden';
            this.nextButton.style.transition = '0s';
        }
        else
        {
            this.nextButton.style.visibility = 'visible';
            this.nextButton.style.transition = '';
        }
    }
}