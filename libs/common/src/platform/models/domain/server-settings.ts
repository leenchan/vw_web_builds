export class ServerSettings {
  disableUserRegistration: boolean;
  ssoOnly: boolean;
  ssoClientId: string;

  constructor(data?: ServerSettings) {
    this.disableUserRegistration = data?.disableUserRegistration ?? false;
    this.ssoOnly = data?.ssoOnly ?? false;
    this.ssoClientId = data?.ssoClientId ?? "";
  }
}
