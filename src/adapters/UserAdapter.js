const createUserAdapter = (register) => {
  const { id, username, email, phone_number, jwt, admin, status, created_at, last_update } = register

  const adapter = {
      id,
      username,
      email,
      phone_number,
      jwt,
      admin,
      status,
      created_at,
      last_update
  }

  return adapter
}

export default createUserAdapter