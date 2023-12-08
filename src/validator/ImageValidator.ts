import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsImage(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isImage',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const key = args.property;
          const file = args.object[key];

          if (file) {
            // ทำการตรวจสอบว่าไฟล์เป็นประเภทรูปภาพหรือไม่
            const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
            if (allowedTypes.includes(file.mimetype)) {
              return true;
            }
          }
          return false;
        },
        defaultMessage(args: ValidationArguments) {
          if (!args.value) {
               return `${args.property} should not be empty.`;
          }
          return `${args.property} must be a valid image (jpeg, png, gif).`;
        },
      },
    });
  };
}
