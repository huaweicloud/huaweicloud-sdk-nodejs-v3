import { WizardUpdateRequestPojo } from './WizardUpdateRequestPojo';


export class WizardUpdateRequestPojos {
    private 'layout_wizard_update_pojo_list'?: Array<WizardUpdateRequestPojo>;
    public constructor() { 
    }
    public withLayoutWizardUpdatePojoList(layoutWizardUpdatePojoList: Array<WizardUpdateRequestPojo>): WizardUpdateRequestPojos {
        this['layout_wizard_update_pojo_list'] = layoutWizardUpdatePojoList;
        return this;
    }
    public set layoutWizardUpdatePojoList(layoutWizardUpdatePojoList: Array<WizardUpdateRequestPojo>  | undefined) {
        this['layout_wizard_update_pojo_list'] = layoutWizardUpdatePojoList;
    }
    public get layoutWizardUpdatePojoList(): Array<WizardUpdateRequestPojo> | undefined {
        return this['layout_wizard_update_pojo_list'];
    }
}