
class Home extends MainPage{
    constructor(container) {
        super(container);
        this.container = container;
    }

    render() {
        const card = this.card;
        this.container.appendChild(card);
    }

    get card() {
        const card =  super.card;

        card.firstChild.appendChild(this.headerDiv)
        card.firstChild.appendChild(this.cardBody);

        return card;
    }


    get headerDiv() {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'card-header';

        const headerText = document.createElement('h3');
        headerText.textContent = 'Pick A City';

        headerDiv.appendChild(headerText);
        return headerDiv;
    }


    get cardBody(){
        const cardBody = super.cardBody;

        const cardForm = document.createElement('form');
        const citySelect = super.getSelect(['תל אביב', 'גבעתיים', 'באר שבע']);
        const dateSelector =super.getSelect(this.nextWeek);
        const hourSelect = super.getSelect(['10:00', '14:30']);
        const submitBtn = this.submitBtn;

        submitBtn.addEventListener('click', ()=>{
            const showPresentation = new ShowPresentation(this.container);
            showPresentation.render();
        })

        cardForm.appendChild(citySelect);
        cardForm.appendChild(dateSelector);
        cardForm.appendChild(hourSelect);
        cardForm.appendChild(submitBtn);

        cardBody.appendChild(cardForm);
        return cardBody;
    }


    get submitBtn(){
        const btnDiv = document.createElement('div');
        btnDiv.className = 'button-holder-central';
        const submitBtn = document.createElement('input');

        btnDiv.className = 'button-holder-central';
        submitBtn.type = 'submit';
        submitBtn.className = 'btn btn-primary';
        submitBtn.textContent = 'Submit'

        btnDiv.appendChild(submitBtn);

        return btnDiv;
    }


    get nextWeek(){
        return ['18/08/21', '19/08/21', '20/08/21'];
    }
}





