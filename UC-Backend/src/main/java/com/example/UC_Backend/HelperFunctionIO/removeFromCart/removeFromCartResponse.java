package com.example.UC_Backend.HelperFunctionIO.removeFromCart;

public class removeFromCartResponse {
    private String message;
    public removeFromCartResponse() {} // Default constructor for deserialization
    public removeFromCartResponse(String message) {
        this.message = message;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
}