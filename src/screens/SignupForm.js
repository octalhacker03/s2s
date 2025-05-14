import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignupForm = ({ role, switchForm }) => {
  const SignupSchema = Yup.object().shape({
    phone: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    relationshipWithChild: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Required'),
  });

  const handleSignup = (values) => {
    console.log('Signup as', role, values);
    // Dummy API call here
  };

  return (
    <Formik
      initialValues={{
        phone: '',
        email: '',
        firstName: '',
        lastName: '',
        relationshipWithChild: '',
        address: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={handleSignup}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
            keyboardType="phone-pad"
          />
          {touched.phone && errors.phone && <Text style={styles.error}>{errors.phone}</Text>}

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={values.firstName}
          />
          {touched.firstName && errors.firstName && <Text style={styles.error}>{errors.firstName}</Text>}

          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
          />
          {touched.lastName && errors.lastName && <Text style={styles.error}>{errors.lastName}</Text>}

          <Text style={styles.label}>Relationship with Child</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('relationshipWithChild')}
            onBlur={handleBlur('relationshipWithChild')}
            value={values.relationshipWithChild}
          />
          {touched.relationshipWithChild && errors.relationshipWithChild && <Text style={styles.error}>{errors.relationshipWithChild}</Text>}

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleChange('address')}
            onBlur={handleBlur('address')}
            value={values.address}
          />
          {touched.address && errors.address && <Text style={styles.error}>{errors.address}</Text>}

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {touched.password && errors.password && <Text style={styles.error}>{errors.password}</Text>}

          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
          />
          {touched.confirmPassword && errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}

          <Button onPress={handleSubmit} title="Sign Up" />
          <Text style={styles.link} onPress={switchForm}>Already have an account? Login ({role})</Text>
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

export default SignupForm;





