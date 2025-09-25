import { ShowSerialConsoleActionsOption } from './ShowSerialConsoleActionsOption';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSerialConsoleActionsResponse extends SdkResponse {
    private 'serial_console'?: ShowSerialConsoleActionsOption;
    public constructor() { 
        super();
    }
    public withSerialConsole(serialConsole: ShowSerialConsoleActionsOption): ShowSerialConsoleActionsResponse {
        this['serial_console'] = serialConsole;
        return this;
    }
    public set serialConsole(serialConsole: ShowSerialConsoleActionsOption  | undefined) {
        this['serial_console'] = serialConsole;
    }
    public get serialConsole(): ShowSerialConsoleActionsOption | undefined {
        return this['serial_console'];
    }
}