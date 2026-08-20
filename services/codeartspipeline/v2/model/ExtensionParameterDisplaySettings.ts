import { ExtensionRadioOption } from './ExtensionRadioOption';


export class ExtensionParameterDisplaySettings {
    private 'DevCloud.ControlType'?: string;
    private 'DevCloud.ControlType.Default'?: string;
    private 'DevCloud.ControlType.Select'?: Array<string>;
    private 'DevCloud.ControlType.Radio'?: Array<ExtensionRadioOption>;
    public constructor() { 
    }
    public withDevCloudControlType(devCloudControlType: string): ExtensionParameterDisplaySettings {
        this['DevCloud.ControlType'] = devCloudControlType;
        return this;
    }
    public set devCloudControlType(devCloudControlType: string  | undefined) {
        this['DevCloud.ControlType'] = devCloudControlType;
    }
    public get devCloudControlType(): string | undefined {
        return this['DevCloud.ControlType'];
    }
    public withDevCloudControlTypeDefault(devCloudControlTypeDefault: string): ExtensionParameterDisplaySettings {
        this['DevCloud.ControlType.Default'] = devCloudControlTypeDefault;
        return this;
    }
    public set devCloudControlTypeDefault(devCloudControlTypeDefault: string  | undefined) {
        this['DevCloud.ControlType.Default'] = devCloudControlTypeDefault;
    }
    public get devCloudControlTypeDefault(): string | undefined {
        return this['DevCloud.ControlType.Default'];
    }
    public withDevCloudControlTypeSelect(devCloudControlTypeSelect: Array<string>): ExtensionParameterDisplaySettings {
        this['DevCloud.ControlType.Select'] = devCloudControlTypeSelect;
        return this;
    }
    public set devCloudControlTypeSelect(devCloudControlTypeSelect: Array<string>  | undefined) {
        this['DevCloud.ControlType.Select'] = devCloudControlTypeSelect;
    }
    public get devCloudControlTypeSelect(): Array<string> | undefined {
        return this['DevCloud.ControlType.Select'];
    }
    public withDevCloudControlTypeRadio(devCloudControlTypeRadio: Array<ExtensionRadioOption>): ExtensionParameterDisplaySettings {
        this['DevCloud.ControlType.Radio'] = devCloudControlTypeRadio;
        return this;
    }
    public set devCloudControlTypeRadio(devCloudControlTypeRadio: Array<ExtensionRadioOption>  | undefined) {
        this['DevCloud.ControlType.Radio'] = devCloudControlTypeRadio;
    }
    public get devCloudControlTypeRadio(): Array<ExtensionRadioOption> | undefined {
        return this['DevCloud.ControlType.Radio'];
    }
}