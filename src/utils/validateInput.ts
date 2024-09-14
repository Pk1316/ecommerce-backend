import httpError from "http-errors";
import Joi from "joi";
export const validateInput = (schema: Joi.ObjectSchema<any>, data:any) => {
  const { error } = schema.validate(data, { abortEarly: false });
  if (error) {
    throw new httpError.BadRequest(
      `Validation Error: ${error.details.map((x:any) => x.message).join(", ")}`
    );
  }
};
