

export class UserModel {

  constructor(private _money: number,
              private _login: string) {
  }


  get money(): number {
    return this._money;
  }

  set money(value: number) {
    this._money = value;
  }

  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }
}
