import memes from 'memes'

const memeEngine = {
    memes: [],
    getHtml(img) {
        console.log(img)
        return `
        <div class="meme">
            <img src="${img}" />
        </div>
    `;
    },

    setMems(memes = []) {
        this.memes = memes;
        return this;
    },

    render() {
        // const _this = this;
        return this.memes.map(meme => {
            return this.getHtml(meme.url)
        }).join('');
    }
};

(function() {
    const root = document.getElementById('root');
    const meme = memes.data[0];
    console.log('-->>', memeEngine.setMems(memes.data).render());
    root.innerHTML = memeEngine.setMems(memes.data).render();
})();

console.log('__>', memes);