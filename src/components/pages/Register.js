import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Register() {
  return (
    <div>
      <form>
        <input type="text" placeholder="lastname" name="lastname" />
        <input type="text" placeholder="firstname" name="firstname" />
        <input type="email" placeholder="email" name="email" />
        <input type="password" placeholder="password" name="password" />
        <input type="radio" name="role" value="visitor" />
        <input type="radio" name="role" value="host" />
        <input type="text" placeholder="avatar" name="avatar" />
        <button type="submit">Inscription</button>
      </form>
    </div>
  );
}
