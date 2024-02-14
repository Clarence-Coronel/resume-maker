import ResumeHeader from "./ResumeHeader"
import ResumeEducation from "./ResumeEducation"
import ResumeExperience from "./ResumeExperience"

export default function LivePreview(){
    return (
        <div className="h-fit p-2 lg:p-7">
            <div class="aspect-[8/11] border-2 border-gray-200shadow">
                <ResumeHeader name="Clarence Coronel" email="clarence.coronel.r@gmail.com" phone="0967 599 8955" location="Plaridel, Bulacan" />
                <div className="p-3 lg:px-20 lg:py-10 flex flex-col gap-y-5">
                    <ResumeEducation />
                    
                    <ResumeExperience />
                </div>
            </div>
        </div>
    )
}