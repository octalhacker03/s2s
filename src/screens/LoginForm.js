import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ role, switchForm }) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const handleLogin = (values) => {
    console.log('Login as', role, values);
    // You can place your dummy API call here
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={handleLogin}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={styles.label}>Phone Number or Email ID</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email && touched.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {errors.password && touched.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <Button onPress={handleSubmit} title="Login" />
          <Text style={styles.link} onPress={switchForm}>
            New to Smile2Steps? Register ({role})
          </Text>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#d1ffbd',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  link: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});

export default LoginForm;
