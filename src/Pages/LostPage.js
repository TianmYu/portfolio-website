import React, { Component } from "react";
import Container from 'react-bootstrap/Container';

export default function LostPage() {
    return (
    <Container fluid={true} className="homepage-format homepage-intro-box">
        <div className="text-outer">
            <div className="text-inner">
                <h1> Seems like you are lost. Click <a href="/"> here </a> to go home </h1>
            </div>
        </div>
    </Container>
    )
}