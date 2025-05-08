import { EditMediaTaskInput } from './EditMediaTaskInput';
import { TaskOutPut } from './TaskOutPut';


export class EditMediaTask {
    public inputs?: Array<EditMediaTaskInput>;
    public output?: TaskOutPut;
    public constructor() { 
    }
    public withInputs(inputs: Array<EditMediaTaskInput>): EditMediaTask {
        this['inputs'] = inputs;
        return this;
    }
    public withOutput(output: TaskOutPut): EditMediaTask {
        this['output'] = output;
        return this;
    }
}