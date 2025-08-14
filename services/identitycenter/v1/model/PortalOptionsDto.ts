import { SignInOptionsDto } from './SignInOptionsDto';


export class PortalOptionsDto {
    public visible?: boolean;
    public visibility?: PortalOptionsDtoVisibilityEnum | string;
    private 'sign_in_options'?: SignInOptionsDto;
    public constructor() { 
    }
    public withVisible(visible: boolean): PortalOptionsDto {
        this['visible'] = visible;
        return this;
    }
    public withVisibility(visibility: PortalOptionsDtoVisibilityEnum | string): PortalOptionsDto {
        this['visibility'] = visibility;
        return this;
    }
    public withSignInOptions(signInOptions: SignInOptionsDto): PortalOptionsDto {
        this['sign_in_options'] = signInOptions;
        return this;
    }
    public set signInOptions(signInOptions: SignInOptionsDto  | undefined) {
        this['sign_in_options'] = signInOptions;
    }
    public get signInOptions(): SignInOptionsDto | undefined {
        return this['sign_in_options'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PortalOptionsDtoVisibilityEnum {
    ENABLED = 'ENABLED',
    DISABLED = 'DISABLED'
}
