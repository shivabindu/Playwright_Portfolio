
class ProductsPage{

    constructor(page){
        this.page = page;
        this.sortDropdown = page.locator('.product_sort_container');
        this.productNames = page.locator('.inventory_item_name');
        this.productPrices = page.locator('.inventory_item_price');
        this.addToCartButtons = page.locator('.btn_inventory');

    }

    async sortProductsBy(option){
        await this.sortDropdown.selectOption(option);
    }

    async getProductNames(){
        return await this.productNames.allTextContents();
    }

    async getProductPrices(){
        return await this.productPrices.allTextContents();
    }

    async addProductToCart(productName){
        const index = await this.productNames.allTextContents().then(names => names.indexOf(productName));
        if(index !== -1){
            await this.addToCartButtons.nth(index).click();
        }
    }   


}