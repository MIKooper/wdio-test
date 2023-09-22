class SearchPage {

    

    get card1() { return $('(//em)[1]') }
    get card2() { return $('(//em)[2]') }
    get card3() { return $('(//em)[3]') }
    get card4() { return $('(//em)[4]') }
    get card5() { return $('(//em)[5]') }
    get card6() { return $('(//em)[6]') }
    get card7() { return $('(//em)[7]') }
    get card8() { return $('(//em)[8]') }
    get card9() { return $('(//em)[9]') }
    get card10() { return $('(//em)[10]') }

    

    async checkcard1() {
        await expect (this.card1).toHaveTextContaining('act')
    }

    async checkcard2() {
        await expect (this.card2).toHaveTextContaining('Act')
    }

    async checkcard3() {
        await expect (this.card3).toHaveTextContaining('act')
    }

    async checkcard4() {
        await expect (this.card4).toHaveTextContaining('act')
    }

    async checkcard5() {
        await expect (this.card5).toHaveTextContaining('Act')
    }

    async checkcard6() {
        await expect (this.card6).toHaveTextContaining('Act')
    }

    async checkcard7() {
        await expect (this.card7).toHaveTextContaining('act')
    }

    async checkcard8() {
        await expect (this.card8).toHaveTextContaining('act')
    }

    async checkcard9() {
        await expect (this.card9).toHaveTextContaining('Act')
    }

    async checkcard10() {
        await expect (this.card10).toHaveTextContaining('ACT')
    }

}

export default new SearchPage()