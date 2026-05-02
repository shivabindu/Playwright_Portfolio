

export class HomePage{

constructor(page){
    this.page = page;
    this.username_loc = page.getByPlaceholder('Username');
    this.password_loc = page.locator('#password');
    this.login = page.locator('#login-button');
}

async launchURL(){
    await this.page.goto('https://www.saucedemo.com/');
}

async clickOnLoginButton(username, password){

    await this.username_loc.fill(username);
    await this.password_loc.fill(password);
    await this.login.click();

}
}

//module.exports = {homePage};


