import axios from 'axios';

//Registrar
export const registerUser = async ({
  Email,
  Password,
  FirstName,
  LastName,
  Phone,
}) => {
  try {
    const response = await axios.post(
      'https://dizzgob.ccontrolz.com/user/insert',
      {
        Email,
        Password,
        FirstName,
        LastName,
        Phone,
      },
    );

    return response;
  } catch (error) {
    throw error;
  }
};

//Verificar email
export const verifyEmail = async email => {
  try {
    const url = `https://dizzgob.ccontrolz.com/auth-validate?email=${encodeURIComponent(
      email,
    )}`;
    const response = await axios.get(url);

    return response;
  } catch (error) {
    throw error;
  }
};

//Verificar codigo
export const verifyCode = async (code, gmail) => {
  try {
    const url = 'https://dizzgob.ccontrolz.com/user/validate';
    const response = await axios.post(url, {
      Email: gmail,
      Code: code,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

//Actualizar contraseña
export const updatePassword = async jsonData => {
  try {
    const response = await fetch(
      `https://dizzgob.ccontrolz.com/user/recoverPassword`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      },
    );

    if (response.ok) {
      const data = await response.json();
      return {success: true, data};
    } else {
      const errorData = await response.json();
      return {success: false, error: errorData};
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      success: false,
      error: 'Error en la solicitud actualizar contraseña',
    };
  }
};
