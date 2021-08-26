import { AttributesExpression } from './AttributesExpression';
import { Dress } from './Dress';
import { FaceQuality } from './FaceQuality';


export class Attributes {
    public dress: Dress;
    public glass: string;
    public gender: string;
    private 'yaw_angle': number | undefined;
    private 'roll_angle': number | undefined;
    private 'pitch_angle': number | undefined;
    public hat: string;
    public headpose: Array<number>;
    public age: number;
    public smile: string;
    public mask: string;
    public beard: string;
    public skin: string;
    public ethnic: string;
    public phototype: string;
    public quality: FaceQuality;
    public hair: string;
    public expression: AttributesExpression;
    private 'face_angle': number | undefined;
    public constructor(dress?: any, glass?: any, gender?: any, yawAngle?: any, rollAngle?: any, pitchAngle?: any, hat?: any, headpose?: any, age?: any, smile?: any, mask?: any, beard?: any, skin?: any, ethnic?: any, phototype?: any, quality?: any, hair?: any, expression?: any, faceAngle?: any) { 
        this['dress'] = dress;
        this['glass'] = glass;
        this['gender'] = gender;
        this['yaw_angle'] = yawAngle;
        this['roll_angle'] = rollAngle;
        this['pitch_angle'] = pitchAngle;
        this['hat'] = hat;
        this['headpose'] = headpose;
        this['age'] = age;
        this['smile'] = smile;
        this['mask'] = mask;
        this['beard'] = beard;
        this['skin'] = skin;
        this['ethnic'] = ethnic;
        this['phototype'] = phototype;
        this['quality'] = quality;
        this['hair'] = hair;
        this['expression'] = expression;
        this['face_angle'] = faceAngle;
    }
    public withDress(dress: Dress): Attributes {
        this['dress'] = dress;
        return this;
    }
    public withGlass(glass: string): Attributes {
        this['glass'] = glass;
        return this;
    }
    public withGender(gender: string): Attributes {
        this['gender'] = gender;
        return this;
    }
    public withYawAngle(yawAngle: number): Attributes {
        this['yaw_angle'] = yawAngle;
        return this;
    }
    public set yawAngle(yawAngle: number | undefined) {
        this['yaw_angle'] = yawAngle;
    }
    public get yawAngle() {
        return this['yaw_angle'];
    }
    public withRollAngle(rollAngle: number): Attributes {
        this['roll_angle'] = rollAngle;
        return this;
    }
    public set rollAngle(rollAngle: number | undefined) {
        this['roll_angle'] = rollAngle;
    }
    public get rollAngle() {
        return this['roll_angle'];
    }
    public withPitchAngle(pitchAngle: number): Attributes {
        this['pitch_angle'] = pitchAngle;
        return this;
    }
    public set pitchAngle(pitchAngle: number | undefined) {
        this['pitch_angle'] = pitchAngle;
    }
    public get pitchAngle() {
        return this['pitch_angle'];
    }
    public withHat(hat: string): Attributes {
        this['hat'] = hat;
        return this;
    }
    public withHeadpose(headpose: Array<number>): Attributes {
        this['headpose'] = headpose;
        return this;
    }
    public withAge(age: number): Attributes {
        this['age'] = age;
        return this;
    }
    public withSmile(smile: string): Attributes {
        this['smile'] = smile;
        return this;
    }
    public withMask(mask: string): Attributes {
        this['mask'] = mask;
        return this;
    }
    public withBeard(beard: string): Attributes {
        this['beard'] = beard;
        return this;
    }
    public withSkin(skin: string): Attributes {
        this['skin'] = skin;
        return this;
    }
    public withEthnic(ethnic: string): Attributes {
        this['ethnic'] = ethnic;
        return this;
    }
    public withPhototype(phototype: string): Attributes {
        this['phototype'] = phototype;
        return this;
    }
    public withQuality(quality: FaceQuality): Attributes {
        this['quality'] = quality;
        return this;
    }
    public withHair(hair: string): Attributes {
        this['hair'] = hair;
        return this;
    }
    public withExpression(expression: AttributesExpression): Attributes {
        this['expression'] = expression;
        return this;
    }
    public withFaceAngle(faceAngle: number): Attributes {
        this['face_angle'] = faceAngle;
        return this;
    }
    public set faceAngle(faceAngle: number | undefined) {
        this['face_angle'] = faceAngle;
    }
    public get faceAngle() {
        return this['face_angle'];
    }
}