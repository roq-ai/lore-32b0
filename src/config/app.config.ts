interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Employer User'],
  customerRoles: ['Student User'],
  tenantRoles: ['Employer User', 'Admin User'],
  tenantName: 'Company',
  applicationName: 'lore',
  addOns: ['file', 'notifications', 'chat'],
};
